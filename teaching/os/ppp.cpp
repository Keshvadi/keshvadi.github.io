#include <iostream>
#include <thread>

using std::cout;
using std::endl;

static void greeding()
{
    cout << "Hello" << endl;
}

static void greeding(int i)
{
    cout << "Hello from thread " << i <<  endl;
}


int main(int argc, char const *argv[])
{
#if 0
    std::thread t1(greeding);
    t1.join();
#endif

#if 1
std::thread threads [5];
for (size_t i = 0; i < 5; i++)
{
    threads[i] = std::thread(greeding, i);
}

#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

#if 0
#endif

    return 0;
}
