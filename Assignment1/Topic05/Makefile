TARGETS=ex01 ams01 ams02

all: $(TARGETS)

LIBS=-lzdk -lncurses -lm
DIRS=-I../ZDK -L../ZDK
FLAGS=-std=gnu99 -Wall -Werror -g

clean:
	for f in $(TARGETS); do \
		if [ -f $$f ]; then rm $$f; fi; \
		if [ -f $$f.exe ]; then rm $$f.exe; fi; \
	done

rebuild: clean all

ex01: ex01.c
	gcc $(FLAGS) $@.c -o $@ $(DIRS) $(LIBS) 

ams01: ams01.c
	gcc $(FLAGS) $@.c -o $@ $(DIRS) $(LIBS) 

ams02: ams02.c
	gcc $(FLAGS) $@.c -o $@ $(DIRS) $(LIBS) 
