/**
 * File: system.cpp
 * ----------------
 * Demonstrates the build-in system() function.
 */

#include <stdio.h>
#include <unistd.h>
#include <stdbool.h>
#include <sys/wait.h>
#include "string.h"

int main(int argc, char *argv[]) {
    int status = system(argv[1]);
    printf("system finished with return value %d\n", status);
    return 0;
}