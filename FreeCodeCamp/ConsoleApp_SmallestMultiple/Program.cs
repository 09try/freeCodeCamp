using System;
using System.Collections.Generic;
using System.Diagnostics;

namespace ConsoleApp_SmallestMultiple
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> n = new List<int>() { 5, 7, 10, 13, 20 };
            List<int> expectedResult = new List<int> { 60, 420, 2520, 360360, 232792560 };

            Stopwatch sw = new Stopwatch();
            double totalElapsed = 0;

            for (int i = 0; i < n.Count; i++)
            {
                sw.Start();

                int result = SmallestMul(n[i]);

                sw.Stop();

                if (result == expectedResult[i])
                {
                    Console.WriteLine("Pass " + sw.ElapsedMilliseconds + " ms");
                }
                else
                {
                    Console.WriteLine("Fail");
                }

                totalElapsed += sw.ElapsedMilliseconds;
                sw.Reset();
            }

            Console.WriteLine("Total elapsed time " + totalElapsed + " ms");
            Console.WriteLine("Press any key to continue");
            Console.ReadKey();
        }

        static int SmallestMul(int n)
        {
            int result = 0;

            for (int j = n * 10 + n; j < int.MaxValue; j++)
            {
                bool isDivisibleByAll = true;

                for (int i = n; i > 0; i--)
                {
                    if (j % i == 0)
                    {
                        // Is divisible
                    }
                    else
                    {
                        isDivisibleByAll = false;
                        break;
                    }
                }

                if (isDivisibleByAll == true)
                {
                    result = j;
                    break;
                }
            }

            return result;
        }
    }
}