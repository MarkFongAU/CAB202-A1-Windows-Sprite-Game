#include "cab202_sprites.h"
#include "cab202_timers.h"
#include "cab202_graphics.h"
#include <math.h>


/*
*	fixed_sprite_turn:
*
*	Sets the internally stored direction. That is, the step that is taken when
*	the sprite moves forward or backward.
*
*	The new direction is relative to the old one. If the old direction is 0,0 then
*	the new one will also be 0,0.
*
*	Input:
*		sprite: The ID of a sprite.
*		degrees: The angle to turn.
*/

void fixed_sprite_turn( sprite_id sprite, double degrees ) {
	double radians = degrees * M_PI / 180;
	double s = sin( radians );
	double c = cos( radians );
	double dx = c * sprite->dx + s * sprite->dy;
	double dy = -s * sprite->dx + c * sprite->dy;
	sprite->dx = dx;
	sprite->dy = dy;
}



int main( void ) {
	setup_screen();

	sprite_id walker = sprite_create( screen_width() / 2, ( screen_height() - 3 ) / 2, 1, 3, "0+A" );
	sprite_turn_to( walker, 1, 0 );
	timer_id timer = create_timer( 200 );
	int step_count = 0;

	while ( true ) {
		int old_x = round( walker->x );
		int old_y = round( walker->y );

		if ( timer_expired (timer) ) {
			sprite_step( walker );
			step_count++;

			if ( step_count % 7 == 0 ) {
				fixed_sprite_turn( walker, +20 );
			}
		}

		if ( round( walker->x ) != old_x || round( walker->y ) != old_y ) {
			clear_screen();
			sprite_draw(walker);
			show_screen();
		}

		timer_pause( 20 );
	}

	cleanup_screen();
}