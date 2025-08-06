/**
 * File: simple_thread.cpp
 * --------------
 * This program creat a simple thread 
 */
#include <iostream>
#include <thread>

using std::cout;
using std::endl;

static void greeding ()
{
    cout << "Hello" << endl;
}

int main(int argc, char const *argv[])
{
    std::thread t1(greeding);
    t1.join();
        
    return 0;
}
