using System;

namespace ConsoleApp_LargestPalindromeProduct
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = 2;
            int expectedResult = 9009;

            int result = LargestPalindromeProduct(n);

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

        static int LargestPalindromeProduct(int n)
        {
            int largestPalindrome = 0;
            int largestNumber = Convert.ToInt32(Math.Pow(10, n));
            int smallestNumber = largestNumber / 10;

            int currentResult = 0;

            for (int i = 0; i < largestNumber; i++)
            {
                for (int j = 0; j < largestNumber - i; j++)
                {
                    int first = largestNumber - i;
                    int second = largestNumber - j;

                    if (first > smallestNumber && second > smallestNumber)
                    {
                        currentResult = first * second;

                        string currentResultString = currentResult.ToString();
                        bool isPalindrome = true;

                        for (int k = 0; k < currentResultString.Length / 2; k++)
                        {
                            char firstChar = currentResultString[k];
                            char lastChar = currentResultString[currentResultString.Length - 1 - k];

                            if (firstChar == lastChar)
                            {
                                // Same
                            }
                            else
                            {
                                isPalindrome = false;
                                break;
                            }
                        }

                        if (isPalindrome == true)
                        {
                            if (currentResult > largestPalindrome)
                            {
                                largestPalindrome = currentResult;
                            }
                        }
                    }
                }
            }

            return largestPalindrome;
        }
    }
}
