/*	CAB202:
* Assignment 1 - Zombie Jump
*
*	Fong, March 2016
*	Queensland University of Technology
*/

#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <time.h>
#include <math.h>
#include <ncurses.h>
#include "cab202_graphics.h"
#include "cab202_timers.h"
#include "cab202_sprites.h"
#include "stdbool.h"
// ----------------------------------------------------------------
// Global variables containing "long-term" state of program
// ----------------------------------------------------------------

bool game_over = false;     //Game is over or not
bool level_over = false;    // Game-in-progress status: true if and only if the game is finished.
bool all_over = false;
bool reset_game = false;    //Reset Game
bool change_level = false;  //Change game level
bool dead = false;          //Player status dead or alive
int score;   //Player score
int life;    //Player life
int level = 1;   // Game Level
int start_x; // The horizontal location of the player, relative to the terminal window
int start_y; // The vertical location of the player, relative to the terminal window.
int max_x;   // The largest visible horizontal location.
int max_y; 	 // The largest visible vertical location, relative to the terminal window.
int speed;

// Game timer
int leftseconds;
int rightseconds;
int leftminutes;
int rightminutes;

#define TN 11 //Number of blocks in game
sprite_id block[TN]; //Block sprite_id
					 //Initial block width and height and widthLocation
int blockwidth;
int blockheight;
int widthGap;
int prevwidthLocation;
int widthLocation;

//Jumping mechanic
float jx = 0;
float jy = 0;
bool jumping = false;
bool stepping = false;

//Current block where the human is on, start at block 0
int currentblock;
bool onblock;
int current_x;
int current_y;
int respawnBlock_y;

sprite_id human;      //Human sprite_id
timer_id block_timer; // Block Timer
timer_id game_timer;  // Game Timer;
timer_id jump_timer = NULL;  // Jump Timer , step timer

							 //Block sprite
							 //SafeBlock is 3-10 characters wide.
static char * bitmapSafeBlock =
"=========="
"==========";

//ForbiddenBlock is 3-10 characters wide.
static char * bitmapForbiddenBlock =
"xxxxxxxxxx"
"xxxxxxxxxx";

//Destruction_sprite
char * bitmapDestructionLeft = " <<< <<<<<<<<<<<<<<< <<< ";
char * bitmapDestructionRight = " >>> >>>>>>>>>>>>>>> >>> ";
char * bitmapDestructionUp = " ^^^ ^^^^^^^^^^^^^^^ ^^^ ";
char * bitmapDestructionDown = " vvv vvvvvvvvvvvvvvv vvv ";
sprite_id* destruction_sprite = NULL;
int spritewidth;
int spriteheight;
int spriteX;
int spriteY;
int direction;
int directionX;
int directionY;
bool spritespawing = false;
timer_id dest_timer = NULL;
timer_id spawndestgap_timer = NULL;
bool looping = false;
int angle;
int turns;
// ----------------------------------------------------------------
//	Configuration
// ----------------------------------------------------------------
#define LEFT KEY_LEFT
#define RIGHT KEY_RIGHT
#define UP KEY_UP
#define DOWN KEY_DOWN
#define QUIT 'q'
#define CHANGELEVEL 'l'
#define RESETGAME 'r'
#define ONE '1'
#define TWO '2'
#define THREE '3'
#define JUMP 'x'
#define GRAVITY 10
#define TIMESTEP 50
#define VELOCITY 1
#define UPVELO -15
#define HORVELO 2
#define CHAR_LEFT '<'
#define CHAR_RIGHT '>'
#define CHAR_UP '^'
#define CHAR_DOWN 'V'

// ----------------------------------------------------------------
// Forward declarations of functions
// ----------------------------------------------------------------
void setup();
void event_loop();
void cleanup();
void pause_for_exit();
bool process_screen();
//Process the keys based on the levels
bool process_key1();
bool process_key2();
bool process_key3();
void contain_humaninScreen();
bool process_timer1();
bool process_timer2();
bool process_timer3();

void draw_all();

//Set up game
void setup_level1();
void setup_level2();
void setup_level3();
void draw_displayscreen(); //Game Display screen
void draw_menu();
void process_menu(); //Select if change game level, reset game or leave game

					 //Set up Player
void setup_player();
void draw_player();

//Setup Blocks
void setup_block();
void setup_block1();
void setup_block2();
void setup_block3();
void draw_block();

//Setup Destruction Sprite
void setup_destruction();
void draw_destruction();
//Create_destruction_sprite_bitmap
void create_destruction_bitmap(char** bitmap, char *);
//Destroy_destruction_sprite
void free_destruction(sprite_id*);

//Process Destruction Sprite
void process_destruction();
bool isAdjacent(sprite_id, sprite_id);

// Remove destruction sprite and timer
void remove_destruction();

//Process game timer
bool process_gametimer();

//Process block and human
//Level 1
bool process_blockhuman1();

//Level 2
bool process_block2();
bool process_human2();
//Level 3
bool process_block3();
bool process_human3();
//Process jump
void process_jumping();

//When block reacehs the top
void process_blocktop(sprite_id);
void process_landblock(sprite_id); //Process when human land on safe block
void process_landblock2(sprite_id);
void process_landblock3(sprite_id);
void process_failblock(); //Process when human fail to land on safe block
void perform_timestep(); //Process human jump

						 // ----------------------------------------------------------------
						 // main function
						 // ----------------------------------------------------------------
int main(void) {
	setup();
	event_loop();
	cleanup();
	return 0;
}

/*
*	Set up the game. Sets the terminal to curses mode and places the turtle.
*/
void setup() {
	//auto_save_screen=true;
	setup_screen();
	max_x = screen_width() - 1;
	max_y = screen_height() - 1;
	//Initialise Life,Score, and Time
	life = 3;
	score = 0;
	rightseconds = 0;
	leftseconds = 0;
	rightminutes = 0;
	leftminutes = 0;
	game_over = false;
	currentblock = 0;
	level_over = false;
}

/*
*	Restore the terminal to normal mode.
*/
void cleanup() {
	cleanup_screen();
}

/*
*	Processes keyboard timer events to progress game.
*/
void event_loop() {
	while (!game_over) {
		level_over = false;
		if (level == 1) {
			setup();
			setup_level1();
			draw_all();
			all_over = false;
			while (all_over == false) {
				if (dead) {
					setup_level1();
					draw_all();
					dead = false;
				}
				bool must_redraw = false;

				must_redraw = must_redraw || process_screen();
				must_redraw = must_redraw || process_key1();
				must_redraw = must_redraw || process_timer1();

				if (must_redraw) {
					draw_all();
				}
				if (life <= 0) {
					level_over = true;
				}

				if (!must_redraw) process_menu();
				//timer_pause( 20 );
			}
		}
		else if (level == 2) {
			setup();
			setup_level2();
			draw_all();
			all_over = false;
			while (all_over == false) {
				if (dead) {
					setup_level2();
					draw_all();
					dead = false;
				}
				bool must_redraw = false;

				must_redraw = must_redraw || process_screen();
				must_redraw = must_redraw || process_timer2();
				must_redraw = must_redraw || process_key2();


				if (must_redraw) {
					draw_all();
				}
				if (life <= 0) {
					level_over = true;
				}

				if (!must_redraw) process_menu();
				//timer_pause( 20 );
			}

		}
		else if (level == 3) {
			setup();
			setup_level3();
			draw_all();
			all_over = false;
			while (all_over == false) {
				if (dead) {
					remove_destruction();
					setup_level3();
					draw_all();
					dead = false;
				}
				bool must_redraw = false;
				//Create destruction sprite
				if (destruction_sprite == NULL) {
					setup_destruction();
					spritespawing = true;
				}

				must_redraw = must_redraw || process_screen();
				must_redraw = must_redraw || process_timer3();
				must_redraw = must_redraw || process_key3();

				if (must_redraw) {
					draw_all();
				}
				if (life <= 0) {
					level_over = true;
				}

				if (!must_redraw) process_menu();
				//timer_pause( 20 );
			}
		}
	}


	pause_for_exit();
}

/*
*	Process keyboard events when player press either 'l','q','r'.
*/
void process_menu() {
	// Game over
	if (level_over) {
		clear_screen();
		draw_string(max_x / 2 - 20, max_y / 2, "Game Over! Please select an option.");
		draw_string(max_x / 2 - 20, max_y / 2 + 1, "l = Change Level, r = Reset Game, q = Quit.");
		int key = wait_char();
		//And player choose to exit
		if (key == QUIT) {
			//Exit game for real
			game_over = true;
		}
		else if (key == CHANGELEVEL) {
			//Change Level
			change_level = true;
		}
		else if (key == RESETGAME) {
			//Reset Level
			reset_game = true;
		}
	}
	if (game_over) {
		all_over = true;
	}
	//Check condition
	else if (change_level) {
		//Change game level, reset game
		clear_screen();
		draw_string(max_x / 2 - 10, max_y / 2, "Changing Game Level.");
		draw_string(max_x / 2 - 10, max_y / 2 + 1, "Press any key to continue...");
		wait_char();
		speed = 0;
		level++;
		if (level > 3) {
			level = 1;
		}

		all_over = true;
		change_level = false;
		draw_all();
	}
	else if (reset_game) {
		//Only reset game
		clear_screen();
		draw_string(max_x / 2 - 10, max_y / 2, "Resetting Game.");
		draw_string(max_x / 2 - 10, max_y / 2 + 1, "Press any key to continue...");
		wait_char();
		speed = 0;
		all_over = true;
		reset_game = false;
		draw_all();
	}
}

/*
*	Check for
* Displays a messsage and waits for a keypress.
*/
void pause_for_exit() {

	draw_line(0, max_y, max_x, max_y, ' ');
	draw_string(0, screen_height() - 1, "Press any key to exit...");
	wait_char();
}

/*
*	Turn-based screen processing. Tests for resize events,
*	returning true if and only if the size has changed.
*/
bool process_screen() {
	int new_max_x = screen_width() - 1;
	int new_max_y = screen_height() - 1;

	bool size_changed = new_max_x != max_x || new_max_y != max_y;

	if (size_changed) {
		max_x = new_max_x;
		max_y = new_max_y;
	}
	return size_changed;
}

/*
*	Process keyboard events, returning true if and only if the
*	player's position has changed. Has Level 1-3
*/
//Level 1
bool process_key1() {
	int key = get_char();

	if (key == QUIT) {
		level_over = true;
		return false;
	}
	if (key == CHANGELEVEL) {
		change_level = true;
		return false;
	}
	if (key == RESETGAME) {
		reset_game = true;
		return false;
	}

	// Remember original position
	int x0 = human->x;
	int y0 = human->y;

	// Update position, no Up and Down key in Level 1
	if (key == LEFT) {
		if (onblock)human->x--;
	}
	else if (key == RIGHT) {
		if (onblock)human->x++;
	}

	// Make sure human still inside window
	contain_humaninScreen();

	return x0 != human->x || y0 != human->y;
}

//Level 2
bool process_key2() {
	int key = get_char();

	if (key == QUIT) {
		level_over = true;
		return false;
	}
	if (key == CHANGELEVEL) {
		change_level = true;
		return false;
	}
	if (key == RESETGAME) {
		reset_game = true;
		return false;
	}

	// Remember original position
	int x0 = human->x;
	int y0 = human->y;

	// Update position, no Up and Down key in Level 2
	if (key == LEFT) {
		if (onblock) {
			jx -= HORVELO * VELOCITY;
			human->x--;
		}
	}
	else if (key == RIGHT) {
		if (onblock) {
			jx += HORVELO * VELOCITY;
			human->x++;
		}
	}
	else if (key == UP) {
		if (onblock) {
			jy = UPVELO;
			// Start the shooting process, and set the initial velocities
			jumping = true;
			stepping = false;
			human->dx = jx;
			human->dy = jy;
			jx = 0;
			jy = 0;
			onblock = false;
			//Human jump animation timer at 50 miliseconds
			jump_timer = create_timer(TIMESTEP);
		}
	}
	else if (key == DOWN) {
		if (onblock) {
			jx = 0;
		}
	}

	// Make sure human still inside window
	contain_humaninScreen();

	return x0 != human->x || y0 != human->y;
	//return true;
}

//Level 3
bool process_key3() {
	int key = get_char();

	if (key == QUIT) {
		level_over = true;
		remove_destruction();
		return false;
	}
	if (key == CHANGELEVEL) {
		change_level = true;
		remove_destruction();
		return false;
	}
	if (key == RESETGAME) {
		reset_game = true;
		remove_destruction();
		return false;
	}
	if (key == ONE) {
		speed = 1;
		destroy_timer(block_timer);
		block_timer = create_timer(2000);
		return true;
	}
	else if (key == TWO) {
		speed = 2;
		destroy_timer(block_timer);
		block_timer = create_timer(500);
		return true;
	}
	else if (key == THREE) {
		speed = 3;
		destroy_timer(block_timer);
		block_timer = create_timer(125);
		return true;
	}
	// Remember original position
	int x0 = human->x;
	int y0 = human->y;

	// Update position, no Up and Down key in Level 2
	if (key == LEFT) {
		if (onblock) {
			jx -= HORVELO * VELOCITY;
			human->x--;
		}
	}
	else if (key == RIGHT) {
		if (onblock) {
			jx += HORVELO * VELOCITY;
			human->x++;
		}
	}
	else if (key == UP) {
		if (onblock) {
			jy = UPVELO;
			// Start the shooting process, and set the initial velocities
			jumping = true;
			stepping = false;
			human->dx = jx;
			human->dy = jy;
			jx = 0;
			jy = 0;
			onblock = false;
			//Human jump animation timer at 50 miliseconds
			jump_timer = create_timer(TIMESTEP);
		}
	}
	else if (key == DOWN) {
		if (onblock) {
			jx = 0;
		}
	}

	// Make sure human still inside window
	contain_humaninScreen();

	return x0 != human->x || y0 != human->y;
	//return true;
}
/*
*	Method to contain human in game screen.
*/
void contain_humaninScreen() {
	while (human->x < 0) {
		human->x++;
		human->dx = 0;
	}
	while (human->y < 0) human->y++;
	while (human->x > max_x) {
		human->x--;
		human->dx = 0;
	}
	while (human->y > max_y) human->y--;

	//draw_formatted(20, 1, "Vx: %f  Vy: %f", jx, jy);
	draw_formatted(22, 1, "Horizontal Velocity: %d", (int)jx);
}
/*
*	Process timer events, returning true if and only if the
*	screen must be updated as the result of time passing.
*/
bool process_timer1() {
	bool something_happened = process_gametimer();
	something_happened = process_blockhuman1();
	return something_happened;
}
bool process_timer2() {
	bool something_happened = process_gametimer();
	process_jumping();
	something_happened = process_human2();
	something_happened = process_block2();

	return something_happened;
}
bool process_timer3() {
	bool something_happened = process_gametimer();
	process_jumping();
	something_happened = process_human3();
	something_happened = process_block3();
	process_destruction();
	return something_happened;
}

/*
*	Redraws the screen
*/
void draw_all() {
	clear_screen();
	draw_player();
	draw_block();
	draw_destruction();
	draw_displayscreen();
	draw_menu();
	show_screen();
}

/*
* Tries to move the block; returns true iff the block moved.
*/
bool process_blockhuman1() {
	//When Block, reach the top, move to this location
	respawnBlock_y = max_y;

	//Timer which expires in 0.5 seconds
	if (timer_expired(block_timer)) {

		bool block_moved = false;

		for (int i = 0; i < TN; i++) {
			double x0 = round(block[i]->x);
			double y0 = round(block[i]->y);

			//When human is ontop of a safeblock, block[0] always safeblock
			if (currentblock == i) {
				if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height) {
					//Human lands on block exactly, Move human one step upwards
					process_landblock(block[i]);
				}
				else if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height - 1) {
					//Human lands on block not exactly, Move human one step upwards
					human->y++;
					process_landblock(block[i]);
				}
				else {
					currentblock = -1;
					process_failblock();
				}
			}
			else {
				//Player fall to the bottom game border or head passes the top game border
				if (human->y >= max_y - 2 - human->height || human->y <= 2) {
					life--;
					dead = true;
					return true;
				}

				//Check if player is on safeblock
				if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height) {
					//If not on safe block
					if (block[i]->bitmap == bitmapForbiddenBlock) {
						life--;
						dead = true;
						return true;
					}
					else {
						currentblock = i;
						//Human on block, Move human one step upwards
						process_landblock(block[i]);
						score++;
					}
				}
				else if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height - 1) {
					//If not on safe block
					if (block[i]->bitmap == bitmapForbiddenBlock) {
						life--;
						dead = true;
						return true;
					}
					else {
						currentblock = i;
						//Human on block, Move human one step upwards
						human->y++;
						process_landblock(block[i]);
						score++;
					}
				}
			}
			//Move block
			sprite_step(block[i]);

			//Check if block reach the top
			process_blocktop(block[i]);

			//Bool block moved
			block_moved = block_moved || round(block[i]->x) != x0 || round(block[i]->y) != y0;
		}
		//Move human
		sprite_step(human);
		return block_moved;

	}
	else {
		return false;
	}
}

bool process_human2() {
	bool human_moved = false;
	for (int i = 0; i < TN; i++) {
		// double x0 = round(block[i]->x);
		// double y0 = round(block[i]->y);
		//When human is ontop of a safeblock, block[0] always safeblock
		if (currentblock == i) {
			if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height) {
				//Human lands on block exactly, Move human one step upwards
				if (!(jumping || stepping))process_landblock2(block[i]);
			}
			else if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height - 1) {
				//Human lands on block not exactly, Move human one step upwards
				if (!(jumping || stepping))process_landblock2(block[i]);
				human->y++;
			}
			else {
				//Human step out of the block, stepping
				//Not jumping and stepping, mean stepping need to happen
				if (!jumping && !stepping) {
					jumping = false;
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
					stepping = true;
					human->dx = jx;
					human->dy = 0;
					jx = 0;
					jy = 0;
					//Human jump animation timer at 50 miliseconds
					jump_timer = create_timer(TIMESTEP);
				}
				//Jumping, not  stepping
				else if (jumping && !stepping) {
					stepping = false;
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
				}
				//Not Jumping, stepping
				else if (!jumping && stepping) {
					jumping = false;
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
				}
				//Fall from other blocks, stepping is already true
				else {
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
				}
			}
		}

		else {
			//Player fall to the bottom game border or head passes the top game border
			if (human->y >= max_y - 2 - human->height || human->y <= 2) {
				life--;
				dead = true;
				jumping = false;
				stepping = false;
				onblock = true;
				return true;
			}
			if (jumping || stepping) {
				//Check if player hit the side of a block left side and right side
				if ((int)human->x >= (int)block[i]->x - 1 && (int)human->x <= (int)block[i]->x + (int)block[i]->width - 1 && (int)human->y >= (int)block[i]->y - 2 && (int)human->y <= (int)block[i]->y + 1) {
					human->dx = 0;
				}
				//Check if player is on safeblock
				if (round(human->x) >= (int)block[i]->x && round(human->x) <= (int)block[i]->x + (int)block[i]->width - 1 && (int)human->y >= (int)block[i]->y - (int)human->height && (int)human->y <= (int)block[i]->y - (int)human->height + 1) {
					//If not on safe block
					if (block[i]->bitmap == bitmapForbiddenBlock) {
						life--;
						dead = true;
						jumping = false;
						stepping = false;
						onblock = true;
						return true;
					}
					else {
						if (jumping) {
							jumping = false;
						}
						else if (stepping) {
							stepping = false;
						}
						sprite_move_to(human, (int)human->x, (int)block[i]->y - human->height);
						currentblock = i;
						destroy_timer(jump_timer);
						jump_timer = NULL;
						if (!onblock) {
							score++;
							onblock = true;
						}
						draw_all();
						//Human on block, Move human one step upwards
						process_landblock2(block[i]);
					}
				}
			}
		}
	}
	//human_moved = human_moved || round(human->x) != x0 || round(human->y) != y0;
	return human_moved;
}

bool process_block2() {
	if (dead == true)
	{
		return true;
	}
	//When Block, reach the top, move to this location
	respawnBlock_y = max_y;

	//Timer which expires in 0.5 seconds
	if (timer_expired(block_timer)) {

		bool block_moved = false;

		for (int i = 0; i < TN; i++) {
			double x0 = round(block[i]->x);
			double y0 = round(block[i]->y);
			//Move block
			sprite_step(block[i]);

			//Check if block reach the top
			process_blocktop(block[i]);

			//Bool block moved
			block_moved = block_moved || round(block[i]->x) != x0 || round(block[i]->y) != y0;
		}
		if (!(jumping || stepping))sprite_step(human);
		return block_moved;
	}
	else {
		return false;
	}
}

bool process_human3() {
	bool human_moved = false;

	if (isAdjacent(destruction_sprite[0], human)) {
		life--;
		dead = true;
		speed = 0;
		jumping = false;
		stepping = false;
		onblock = true;
		return true;
	}
	for (int i = 0; i < TN; i++) {
		// double x0 = round(block[i]->x);
		// double y0 = round(block[i]->y);
		//When human is ontop of a safeblock, block[0] always safeblock
		if (currentblock == i) {
			if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height) {
				//Human lands on block exactly, Move human one step upwards
				if (!(jumping || stepping))process_landblock3(block[i]);
			}
			else if (human->x >= block[i]->x && human->x <= block[i]->x + block[i]->width - 1 && human->y == block[i]->y - human->height - 1) {
				//Human lands on block not exactly, Move human one step upwards
				if (!(jumping || stepping))process_landblock3(block[i]);
				human->y++;
			}
			else {
				//Human step out of the block, stepping
				//Not jumping and stepping, mean stepping need to happen
				if (!jumping && !stepping) {
					jumping = false;
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
					stepping = true;
					human->dx = jx;
					human->dy = 0;
					jx = 0;
					jy = 0;
					//Human jump animation timer at 50 miliseconds
					jump_timer = create_timer(TIMESTEP);
				}
				//Jumping, not  stepping
				else if (jumping && !stepping) {
					stepping = false;
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
				}
				//Not Jumping, stepping
				else if (!jumping && stepping) {
					jumping = false;
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
				}
				//Fall from other blocks, stepping is already true
				else {
					currentblock = -1;
					current_x = -1;
					current_y = -1;
					onblock = false;
				}
			}
		}

		else {
			//Player fall to the bottom game border or head passes the top game border
			if (human->y >= max_y - 2 - human->height || human->y <= 2) {
				life--;
				dead = true;
				speed = 0;
				jumping = false;
				stepping = false;
				onblock = true;
				return true;
			}
			if (jumping || stepping) {
				//Check if player hit the side of a block left side and right side
				if ((int)human->x >= (int)block[i]->x - 1 && (int)human->x <= (int)block[i]->x + (int)block[i]->width - 1 && (int)human->y >= (int)block[i]->y - 2 && (int)human->y <= (int)block[i]->y + 1) {
					human->dx = 0;
				}
				//Check if player is on safeblock
				if (round(human->x) >= (int)block[i]->x && round(human->x) <= (int)block[i]->x + (int)block[i]->width - 1 && (int)human->y >= (int)block[i]->y - (int)human->height && (int)human->y <= (int)block[i]->y - (int)human->height + 1) {
					//If not on safe block
					if (block[i]->bitmap == bitmapForbiddenBlock) {
						life--;
						dead = true;
						speed = 0;
						jumping = false;
						stepping = false;
						onblock = true;
						return true;
					}
					else {
						if (jumping) {
							jumping = false;
						}
						else if (stepping) {
							stepping = false;
						}
						sprite_move_to(human, (int)human->x, (int)block[i]->y - human->height);
						currentblock = i;
						destroy_timer(jump_timer);
						jump_timer = NULL;
						if (!onblock) {
							score++;
							onblock = true;
						}
						draw_all();
						//Human on block, Move human one step upwards
						process_landblock3(block[i]);
					}
				}
			}
		}
	}
	//human_moved = human_moved || round(human->x) != x0 || round(human->y) != y0;
	return human_moved;

}
bool process_block3() {
	if (dead == true)
	{
		return true;
	}
	//When Block, reach the top, move to this location
	respawnBlock_y = max_y;

	//Timer which expires in 0.5 seconds
	if (timer_expired(block_timer)) {

		bool block_moved = false;

		for (int i = 0; i < TN; i++) {
			double x0 = round(block[i]->x);
			double y0 = round(block[i]->y);
			//Move block
			sprite_step(block[i]);

			//Check if block reach the top
			process_blocktop(block[i]);

			//Bool block moved
			block_moved = block_moved || round(block[i]->x) != x0 || round(block[i]->y) != y0;
		}
		if (!(jumping || stepping))sprite_step(human);
		return block_moved;
	}
	else {
		return false;
	}
}
/*
* Check if block reach the top
*/
void process_blocktop(sprite_id block) {
	if (block->y < 0) {
		bool isClearLocation = false;
		//Find next block location
		widthLocation = rand() % (max_x - blockwidth);
		while (isClearLocation == false) {
			if (widthLocation >(prevwidthLocation - widthGap - blockwidth) && widthLocation < (prevwidthLocation + widthGap + blockwidth)) {
				widthLocation = rand() % (max_x - blockwidth);
			}
			else {
				isClearLocation = true;
			}
		}
		sprite_move_to(block, widthLocation, respawnBlock_y);
		prevwidthLocation = widthLocation;
	}
	//Check if block reach the top of the game border
	if (block->y >= max_y - 2) {
		sprite_show(block);
	}
	else if (block->y < 2) {
		sprite_hide(block);
	}
}

// ----------------------------------------------------------------
// Setup Game
// ----------------------------------------------------------------
/*
*	Setup the game: blocks and player. Level 1-3
*/
void setup_level1() {
	//Set up Game Timer
	game_timer = create_timer(1000);
	setup_block1();
	setup_player();
	currentblock = 0;
}
void setup_level2() {
	//Set up Game Timer
	game_timer = create_timer(1000);
	setup_block2();
	setup_player();
	jumping = false;
	stepping = false;
	currentblock = 0;
}
void setup_level3() {
	//Set up Game Timer
	game_timer = create_timer(1000);
	setup_block3();
	setup_player();
	jumping = false;
	stepping = false;
	currentblock = 0;
}



/*
*	Displays Game display screen all time  and waits for a keypress.
*/
void draw_displayscreen() {
	//Top of the screen
	draw_string(0, 0, "+");
	draw_string(0, 1, "|");
	draw_string(0, 2, "+");
	draw_string(max_x, 0, "+");
	draw_string(max_x, 1, "|");
	draw_string(max_x, 2, "+");
	draw_line(1, 0, max_x - 1, 0, '-');
	draw_line(1, 1, max_x - 1, 1, ' ');
	draw_line(1, 2, max_x - 1, 2, '-');
	draw_string(2, 1, "Live Remaining: ");
	draw_string(max_x - 20, 1, "Playing Time: ");
	draw_int(18, 1, life);
	draw_int(max_x - 6, 1, leftminutes);
	draw_int(max_x - 5, 1, rightminutes);
	draw_string(max_x - 4, 1, ":");
	draw_int(max_x - 3, 1, leftseconds);
	draw_int(max_x - 2, 1, rightseconds);

	//Bottom of the screen
	draw_string(0, max_y - 2, "+");
	draw_string(0, max_y - 1, "|");
	draw_string(0, max_y, "+");
	draw_string(max_x, max_y - 2, "+");
	draw_string(max_x, max_y - 1, "|");
	draw_string(max_x, max_y, "+");
	draw_line(1, max_y - 2, max_x - 1, max_y - 2, '-');
	draw_line(1, max_y - 1, max_x - 1, max_y - 1, ' ');
	draw_line(1, max_y, max_x - 1, max_y, '-');

	draw_formatted(max_x / 2 - 10, max_y - 1, "Level: %d", level);
	draw_formatted(max_x / 2 + 1, max_y - 1, ", Score: %d", score);
	draw_string(max_x - 15, max_y - 1, "Speed :");
	if (speed == 1)draw_string(max_x - 8, max_y - 1, "SLOW");
	else if (speed == 2)draw_string(max_x - 8, max_y - 1, "NORM");
	else if (speed == 3)draw_string(max_x - 8, max_y - 1, "FAST");
	else {
		draw_string(max_x / 2 + 15, max_y - 1, "   ");
	}
	// if (spritespawing)draw_string(3, max_y - 1, "SPAWN");
	// else {
	// 	draw_string(3, max_y - 1, "No SPAWN");
	// }
	//draw_int(8, max_y - 1, currentblock);
	//draw_int(11, max_y - 1, current_x);
	//draw_string(13, max_y - 1, ":");
	//draw_int(14, max_y - 1, current_y);
	if (jumping)draw_formatted(3, max_y - 1, "S: Jumping %d", currentblock);
	else if (stepping)draw_formatted(3, max_y - 1, "S: Stepping %d", currentblock);
}

/*
*	Displays a messsage and waits for a keypress.
*/
void draw_menu() {
	draw_line(max_x / 2 - 26, max_y, max_x / 2 + 23, max_y, ' ');
	draw_string(max_x / 2 - 26, max_y, " Menu: l = Change Level, r = Reset Game, q = Quit. ");
}


// ----------------------------------------------------------------
// Setup Player
// ----------------------------------------------------------------
/*
*	Setup the Human player.
*/
void setup_player() {
	//Human is 1 character wide, 3 characters height.
	static char * bitmapHuman =
		"o"
		"+"
		"^";

	human = sprite_create(start_x, start_y, 1, 3, bitmapHuman);
	human->dx = 0.0;
	human->dy = 1.0;
}
/*
*	Draws the Human player.
*/
void draw_player() {
	sprite_draw(human);
}

// ----------------------------------------------------------------
// Setup Block Level 1 - 3.
// Setup the blocks in it's intial position and sets up the timer.
// ----------------------------------------------------------------
/*
* Level 1
*/
void setup_block1() {
	time_t now = time(NULL);
	srand(now);
	//Set blockwidth as 7, can be same width
	blockwidth = 7;
	blockheight = 2;
	setup_block();
	//Block moves at 2 character per second, 1 character per second
	block_timer = create_timer(500);
}
/*
* Level 2
*/
void setup_block2() {
	time_t now = time(NULL);
	srand(now);
	//Set blockwidth random from 3-10, can be same width
	blockwidth = rand() % 8 + 3;
	blockheight = 2;
	setup_block();
	//Human on block
	onblock = true;
	//Block moves at 2 character per second, 1 character per second
	block_timer = create_timer(500);

}
/*
* Level 3
*/
void setup_block3() {
	time_t now = time(NULL);
	srand(now);
	//Set blockwidth random from 3-10, can be same width
	blockwidth = rand() % 8 + 3;
	blockheight = 2;
	setup_block();
	//Human on block
	onblock = true;
	//Block moves at 2 character per second, 1 character per second
	block_timer = create_timer(500);
}

/*
* Create blocks
*/
void setup_block() {
	//Create the first block with the human
	int first_x = rand() % (max_x - blockwidth);
	int first_y = max_y - 4;
	block[0] = sprite_create(first_x, first_y, blockwidth, blockheight, bitmapSafeBlock);
	block[0]->dx = 0.0;
	block[0]->dy = -1.0;
	//Set human first location
	start_x = first_x + (blockwidth / 2);
	start_y = first_y - 3;

	//Set prevwidthLocation
	prevwidthLocation = first_x;

	//Random height between tiles 4-6
	int heightGap = 0;
	int secondBlockY = first_y;
	widthGap = 4;

	//Curent widthLocation
	widthLocation = 0;

	//Count ForbiddenBlock
	int countfb = 0;
	static char * bitrandomblock;
	//Create other Block
	for (int i = 1; i < TN; i++) {
		//Spawn ForbiddenBlock at 1/10 chance, safeBlock at 9/10 chance
		int randomNumber = rand() % 10 + 1;

		//If spawn ForbiddenBlock
		if (randomNumber > 8) {
			bitrandomblock = bitmapForbiddenBlock;
		}
		else {
			bitrandomblock = bitmapSafeBlock;
		}
		//If count ForbiddenBlock less than 2 when i >9
		if (i > 9 && countfb < 2) {
			bitrandomblock = bitmapForbiddenBlock;
		}
		bool isClearLocation = false;
		//Find next block location
		widthLocation = rand() % (max_x - blockwidth);
		while (isClearLocation == false) {
			if (widthLocation >(prevwidthLocation - widthGap - blockwidth) && widthLocation < (prevwidthLocation + widthGap + blockwidth)) {
				widthLocation = rand() % (max_x - blockwidth);
			}
			else {
				isClearLocation = true;
			}
		}
		heightGap += 5;
		if (level == 1) {
			block[i] = sprite_create(widthLocation, secondBlockY + heightGap
				, blockwidth, blockheight, bitrandomblock);
		}
		else {
			blockwidth = rand() % 8 + 3;
			block[i] = sprite_create(widthLocation, secondBlockY + heightGap
				, blockwidth, blockheight, bitrandomblock);
		}

		prevwidthLocation = widthLocation;

		block[i]->dx = 0.0;
		block[i]->dy = -1.0;
	}
}
/*
*	Draws blocks.
*/
void draw_block() {
	for (int i = 0; i < TN; i++) {
		sprite_draw(block[i]);
	}
}

// ----------------------------------------------------------------
// Setup Destruction Sprite
// ----------------------------------------------------------------
/*
* create_destruction_sprite_bitmap
*/
void create_destruction_bitmap(char** bitmap, char* bitdesc) {
	//sprintf(*bitmap, " _ | \\|%d||_/");
	//void* my_memory=malloc(20); //Use more memory
	//	sprintf(*bitmap, " > >>> > "); //3
	//	sprintf(*bitmap, " < <<< < "); //3
	//	sprintf(*bitmap, " ^ ^^^ ^ "); //3
	//	sprintf(*bitmap, " v vvv v "); //3
	//	sprintf(*bitmap, " >> >>>> >>>> >> "); //4
	//	sprintf(*bitmap, " << <<<< <<<< << "); //4
	//	sprintf(*bitmap, " ^^ ^^^^ ^^^^ ^^ "); //4
	//	sprintf(*bitmap, " vv vvvv vvvv vv "); //4
	//	sprintf(*bitmap, " xx xxxx xxxxxx xxxxxx xxxx xx ");//6
	//	sprintf(*bitmap, " xxx xxxxx xxxxxxx xxxxxxx xxxxxxx xxxxx xxx ");//7
	//	sprintf(*bitmap, " xx xxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxx xxxx xx ");//8
	//	sprintf(*bitmap, " xxx xxxxx xxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxxxx xxxxxxx xxxxx xxx ");//9
	//	sprintf(*bitmap, " xx xxxx xxxxxx xxxxxxxx xxxxxxxxxx xxxxxxxxxx xxxxxxxx xxxxxx xxxx xx ");//10
	//	sprintf(*bitmap, " xxx xxxxx xxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxx xxxxx xxx ");//11
	//	sprintf(*bitmap, " xx xxxx xxxxxx xxxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xxxxxxxx xxxxxx xxxx xx ");//12
	//	sprintf(*bitmap, " xxx xxxxx xxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxx xxxxx xxx ");//13
	//	sprintf(*bitmap, " xx xxxx xxxxxx xxxxxxxx xxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxxxx xxxxxxxxxxxx xxxxxxxxxx xxxxxxxx xxxxxx xxxx xx ");//14
	//	sprintf(*bitmap, " xxx xxxxx xxxxxxx xxxxxxxxx xxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxx xxxxxxxxx xxxxxxx xxxxx xxx ");//15
	*bitmap = malloc(25 * sizeof *bitmap);
	sprintf(*bitmap, bitdesc); //5
}
/*
* destroy_destruction_sprite
*/
void free_destruction(sprite_id* des) {
	//free(des[0]->bitmap);
	sprite_destroy(des[0]);
	//free(*des);
}
/*
* Setup_destruction_sprite
*/
void setup_destruction()
{
	//Destruction sprite is radius of 3 to 15
	time_t now = time(NULL);
	srand(now);
	spritewidth = 5;
	spriteheight = 5;

	destruction_sprite = malloc(sizeof destruction_sprite);
	char* image = NULL;

	//Find next block location
	int randomspawn = rand() % 2 + 1;

	if (randomspawn == 1) {
		//Direction from NW
		spriteX = 0 - spritewidth;
		spriteY = rand() % 10 + 2;
		create_destruction_bitmap(&image, bitmapDestructionRight);
		destruction_sprite[0] = sprite_create(spriteX, spriteY, spritewidth, spriteheight, image);
		//destruction_sprite = sprite_create(spriteX, spriteY, spritewidth, spriteheight, bitmapDestructionRight);
		destruction_sprite[0]->dx = 1.5;
		destruction_sprite[0]->dy = 1;
		direction = 1;
		directionX = destruction_sprite[0]->dx;
		directionY = destruction_sprite[0]->dy;
	}
	// else if (randomspawn == 2)
	// {
	// 	//Direction from SW
	// 	spriteX = 0 - spritewidth;
	// 	spriteY = rand() % 10 + (max_y - 2 - spriteheight - 10);
	// 	create_destruction_bitmap(&image, bitmapDestructionRight);
	// 	destruction_sprite[0] = sprite_create(spriteX, spriteY, spritewidth, spriteheight, image);
	// 	//destruction_sprite = sprite_create(spriteX, spriteY, spritewidth, spriteheight, bitmapDestructionRight);
	// 	destruction_sprite[0]->dx = 1;
	// 	destruction_sprite[0]->dy = -1;
	// 	direction = 2;
	// 	directionX = destruction_sprite[0]->dx;
	// 	directionY = destruction_sprite[0]->dy;
	// }
	// else if (randomspawn == 3)
	// {
	// 	//Direction from NE
	// 	spriteX = screen_width();
	// 	spriteY = rand() % 10 + 2;
	// 	create_destruction_bitmap(&image, bitmapDestructionLeft);
	// 	destruction_sprite[0] = sprite_create(spriteX, spriteY, spritewidth, spriteheight, image);
	// 	//destruction_sprite = sprite_create(spriteX, spriteY, spritewidth, spriteheight, bitmapDestructionLeft);
	// 	destruction_sprite[0]->dx = -1;
	// 	destruction_sprite[0]->dy = 1;
	// 	direction = 3;
	// 	directionX = destruction_sprite[0]->dx;
	// 	directionY = destruction_sprite[0]->dy;
	// }
	else if (randomspawn == 2)
	{
		//Direction from SE
		spriteX = screen_width();
		spriteY = rand() % 10 + (max_y - 2 - spriteheight - 10);
		create_destruction_bitmap(&image, bitmapDestructionLeft);
		destruction_sprite[0] = sprite_create(spriteX, spriteY, spritewidth, spriteheight, image);
		//destruction_sprite = sprite_create(spriteX, spriteY, spritewidth, spriteheight, bitmapDestructionLeft);
		destruction_sprite[0]->dx = -1.5;
		destruction_sprite[0]->dy = -1;
		direction = 2;
		directionX = destruction_sprite[0]->dx;
		directionY = destruction_sprite[0]->dy;
	}
	//	double mag = sqrt(1e-100 + destruction_sprite->dx * destruction_sprite->dx + destruction_sprite->dy * destruction_sprite->dy);
	//	destruction_sprite->dx /= 2 * mag;
	//	destruction_sprite->dy /= 2 * mag;


	//Destruction sprite runs at 4 characters per second
	dest_timer = create_timer(250);

}

void draw_destruction() {
	if (spritespawing)	sprite_draw(destruction_sprite[0]);
}
// ----------------------------------------------------------------
// Process Destruction Sprite
// ----------------------------------------------------------------
void process_destruction() {
	if (destruction_sprite == NULL) {
		return;
	}
	else {
		if (timer_expired(dest_timer)) {
			sprite_step(destruction_sprite[0]);

			if (destruction_sprite[0]->x < -10) destruction_sprite[0]->dx = fabs(destruction_sprite[0]->dx);
			if (destruction_sprite[0]->x >= screen_width() + destruction_sprite[0]->width) destruction_sprite[0]->dx = -fabs(destruction_sprite[0]->dx);

			if (destruction_sprite[0]->y < -10) destruction_sprite[0]->dy = fabs(destruction_sprite[0]->dy);
			if (destruction_sprite[0]->y >= screen_height() + destruction_sprite[0]->height) destruction_sprite[0]->dy = -fabs(destruction_sprite[0]->dy);

			// if (destruction_sprite[0]->x == max_x/3 && direction==1) {
			// 	looping=true;
			// 	turns=0;
			// 	angle =0;
			// }
			// else if (destruction_sprite[0]->x == max_x/3*2 && direction==2) {
			// 	looping=true;
			// 	turns=0;
			// 	angle =0;
			// }
			// if(looping){
			// 	if(turns%10==0){
			// 		angle +=90;
			// 	  sprite_turn(destruction_sprite[0], -90);
			// 	}
			// 	turns++;
			// 	if(angle==360){
			// 		looping=false;
			// 		turns=0;
			// 	}
			// }

			if (destruction_sprite[0]->dx > 0 && destruction_sprite[0]->dy > 0) {  //To SE
				if (fabs(destruction_sprite[0]->dx) > fabs(destruction_sprite[0]->dy))sprite_set_image(destruction_sprite[0], bitmapDestructionRight);
				else sprite_set_image(destruction_sprite[0], bitmapDestructionDown);
			}
			else if (destruction_sprite[0]->dx > 0 && destruction_sprite[0]->dy < 0) {  //To NE
				if (fabs(destruction_sprite[0]->dx) > fabs(destruction_sprite[0]->dy))sprite_set_image(destruction_sprite[0], bitmapDestructionRight);
				else sprite_set_image(destruction_sprite[0], bitmapDestructionUp);
			}
			else if (destruction_sprite[0]->dx < 0 && destruction_sprite[0]->dy < 0) {  //To NW
				if (fabs(destruction_sprite[0]->dx) > fabs(destruction_sprite[0]->dy))sprite_set_image(destruction_sprite[0], bitmapDestructionLeft);
				else sprite_set_image(destruction_sprite[0], bitmapDestructionUp);
			}
			else if (destruction_sprite[0]->dx < 0 && destruction_sprite[0]->dy > 0) {  //To SW
				if (fabs(destruction_sprite[0]->dx) > fabs(destruction_sprite[0]->dy))sprite_set_image(destruction_sprite[0], bitmapDestructionLeft);
				else sprite_set_image(destruction_sprite[0], bitmapDestructionDown);
			}

			// if (destruction_sprite[0]->x < -5 || destruction_sprite[0]->x > screen_width()+5 || destruction_sprite[0]->y < -5 || destruction_sprite[0]->y > screen_height() )
			// {
			// 	remove_destruction();
			// 	return;
			// }
			draw_all();
		}
	}
}

/// Returns true if and only if the destruction sprites hits human (are adjacent or overlapping).
bool isAdjacent(sprite_id s1, sprite_id s2) {

	if (s1->x > s2->x) {
		sprite_id t = s1; s1 = s2; s2 = t;
	}

	int x1 = round(s1->x);
	int x2 = round(s2->x);
	int y1 = round(s1->y);
	int y2 = round(s2->y);
	int w1 = s1->width;
	int h1 = s1->height;
	int h2 = s2->height;

	if (x2 <= x1 + w1 // Horizontal overlap
		&& y2 <= y1 + h1 // vertical overlap
		&& y1 <= y2 + h2 // vertical overlap
		)
	{
#define DB false
#if DB
		fprintf(stderr, "s1->x = %f", s1->x);
		fprintf(stderr, "s1->y = %f", s1->y);
		fprintf(stderr, "s2->x = %f", s2->x);
		fprintf(stderr, "s2->y = %f", s2->y);
		fprintf(stderr, "s2->y = %f", s2->y);
		fprintf(stderr, "s2->x <= s1->x + s1->width  = %d", s2->x <= s1->x + s1->width);
		fprintf(stderr, "s2->y <= s1->y + s1->height = %d", s2->y <= s1->y + s1->height);
		fprintf(stderr, "s1->y <= s2->y + s2->height = %d", s1->y <= s2->y + s2->height);
		fprintf(stderr, "\n");
#endif
		return true;
	}
	return false;
}
// ----------------------------------------------------------------
// Remove destruction sprite and timer
// ----------------------------------------------------------------
void remove_destruction() {
	free_destruction(destruction_sprite);
	//sprite_destroy(destruction_sprite);
	destruction_sprite = NULL;
	spritespawing = false;
	destroy_timer(dest_timer);
	dest_timer = NULL;
}
// ----------------------------------------------------------------
// Process Game Timer
// ----------------------------------------------------------------
/*
* Checks game time; returns true iff the timer moves.
*/
bool process_gametimer() {
	//Timer which expires in 1 seconds
	if (timer_expired(game_timer)) {
		bool game_moved = false;
		//Increment seconds
		rightseconds++;

		//When right side seconds more than 10
		if (rightseconds >= 10) {
			leftseconds++;
			rightseconds = 0;
		}
		//When left seconds more than 60 seconds
		if (leftseconds >= 6) {
			rightminutes++;
			leftseconds = 0;
		}
		//When right minutes more than 10 minute
		if (rightminutes >= 10) {
			leftminutes++;
			rightminutes = 0;
		}
		game_moved = true;
		return game_moved;
	}
	else {
		return false;
	}
}

/*
* When human land on safe block, process method
*/
void process_landblock(sprite_id block) {
	human->dy = -1.0;
	current_x = block->x;
	current_y = block->y;
	onblock = true;
}
void process_landblock2(sprite_id block) {
	human->dy = -1.0;
	human->dx = 0;
	current_x = block->x;
	current_y = block->y;
	//onblock = true;

}
void process_landblock3(sprite_id block) {
	human->dy = -1.0;
	human->dx = 0;
	current_x = block->x;
	current_y = block->y;
	//onblock = true;

}
/*
* When human fail to land on safe block, process method
*/
void process_failblock() {
	human->dy = 1.0;
	current_x = -1;
	current_y = -1;
	onblock = false;
}
/*
* When human steps out of the block or jump in Level 2 and 3
*/
void perform_timestep() {
	human->x += human->dx * TIMESTEP / 1000.0;
	human->y += human->dy * TIMESTEP / 1000.0;
	human->dx += 0; //No horizontal acceleration
	human->dy += GRAVITY * TIMESTEP / 1000.0;
}

void process_jumping() {
	//Jump or step
	if (jump_timer == NULL) {
	}
	else {
		if (jumping) {
			perform_timestep();
			//Wait until our loop has expired
			while (!timer_expired(jump_timer));
		}
		else if (stepping) {
			perform_timestep();
			//Wait until our loop has expired
			while (!timer_expired(jump_timer));
		}
	}
}
