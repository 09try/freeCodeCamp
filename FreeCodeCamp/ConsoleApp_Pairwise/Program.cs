using System;
using System.Collections.Generic;

namespace ConsoleApp_Pairwise
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arr = new int[] { 1, 4, 2, 3, 0, 5 };
            int arg = 7;
            int expectedResult = 11;

            int result = Pairwise(arr, arg);

            if (result == expectedResult)
            {
                Console.WriteLine("Pass");
            }
            else
            {
                Console.WriteLine("Fail");
            }

            Console.WriteLine("Press any key to continue");
            Console.ReadKey();
        }

        static int Pairwise(int[] arr, int arg)
        {
            int sumOfIndices = 0;
            List<int> usedIndices = new List<int>();

            for (int i = 0; i < arr.Length; i++)
            {
                if (usedIndices.Contains(i) == false)
                {
                    for (int j = i + 1; j < arr.Length; j++)
                    {
                        if (usedIndices.Contains(j) == false)
                        {
                            if (arr[i] + arr[j] == arg)
                            {
                                sumOfIndices = sumOfIndices + i + j;
                                usedIndices.Add(j);
                                break;
                            }
                        }
                    }
                }
            }

            return sumOfIndices;
        }

    }
}
