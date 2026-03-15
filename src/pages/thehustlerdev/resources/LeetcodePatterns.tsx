import { Link } from 'react-router-dom'
import SEO from '../../../components/SEO'

const patterns = [
  {
    title: '1. Two Pointers',
    description:
      'This pattern uses two pointers to traverse data structures, either moving in the same direction (fast/slow) or opposite directions (opposite ends).',
    visualTitle: 'Two Pointers (Opposite Ends)',
    visualContent: (
      <div className="text-left font-mono whitespace-pre text-sm leading-relaxed p-4 bg-[#f8f9fa] rounded">
{`Array: [2, 7, 11, 15]    Target: 9

Left Pointer \u2192 2    Right Pointer \u2192 15
2 + 15 = 17 > 9  \u2192 Move Right Pointer Left

Left Pointer \u2192 2    Right Pointer \u2192 11
2 + 11 = 13 > 9  \u2192 Move Right Pointer Left

Left Pointer \u2192 2    Right Pointer \u2192 7
2 + 7 = 9  \u2713 Found!`}
      </div>
    ),
    pseudoTitle: 'Pseudocode Example: Two Sum II (Opposite Ends)',
    pseudocode: `function twoSum(numbers, target):
    left = 0
    right = length(numbers) - 1
    
    while left < right:
        current_sum = numbers[left] + numbers[right]
        if current_sum == target:
            return [left + 1, right + 1]  # 1-based index
        elif current_sum < target:
            left++
        else:
            right--
    return [-1, -1]  # No solution found`,
    problems: [
      { name: '167. Two Sum II', url: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
      { name: '15. 3Sum', url: 'https://leetcode.com/problems/3sum/' },
      { name: '42. Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/' },
      { name: '11. Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/' },
      { name: '3. Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
    ],
  },
  {
    title: '2. Sliding Window',
    description:
      'Maintains a window of elements in an array/string, which can be either fixed or variable in size.',
    visualTitle: 'Sliding Window Example',
    visualContent: (
      <p className="text-sm text-[#555]">
        For the string 'abcabcbb', the sliding window expands when new unique characters are found
        and contracts when duplicates are encountered, keeping track of the maximum window size with
        all unique characters.
      </p>
    ),
    pseudoTitle: 'Pseudocode Example: Longest Substring Without Repeating Characters',
    pseudocode: `function lengthOfLongestSubstring(s):
    charSet = new Set()
    left = 0
    maxLength = 0
    
    for right in range(len(s)):
        while s[right] in charSet:
            charSet.remove(s[left])
            left++
        charSet.add(s[right])
        maxLength = max(maxLength, right - left + 1)
    
    return maxLength`,
    problems: [
      { name: '3. Longest Substring Without Repeating Characters', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
      { name: '76. Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/' },
      { name: '424. Longest Repeating Character Replacement', url: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
      { name: '209. Minimum Size Subarray Sum', url: 'https://leetcode.com/problems/minimum-size-subarray-sum/' },
      { name: '1004. Max Consecutive Ones III', url: 'https://leetcode.com/problems/max-consecutive-ones-iii/' },
    ],
  },
  {
    title: '3. Binary Search on Answer',
    description:
      'Applies binary search to find the optimal solution in a sorted search space.',
    visualTitle: 'Binary Search on Answer',
    visualContent: (
      <div className="text-left font-mono whitespace-pre text-sm leading-relaxed p-4 bg-[#f8f9fa] rounded">
{`Piles: [3,6,7,11], H=8

Search Space: 1 to 11
Mid = 6: 1+1+2+2=6h \u2264 8  \u2192 Search 1-5
Mid = 3: 1+2+3+4=10h > 8  \u2192 Search 4-5
Mid = 4: 1+2+2+3=8h \u2264 8  \u2192 Minimum speed = 4`}
      </div>
    ),
    pseudoTitle: 'Pseudocode Example: Koko Eating Bananas',
    pseudocode: `function minEatingSpeed(piles, h):
    left = 1
    right = max(piles)
    result = right
    
    while left <= right:
        mid = left + (right - left) // 2
        hours = 0
        
        for pile in piles:
            hours += ceil(pile / mid)
            
        if hours <= h:
            result = min(result, mid)
            right = mid - 1
        else:
            left = mid + 1
            
    return result`,
    problems: [
      { name: '875. Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/' },
      { name: '410. Split Array Largest Sum', url: 'https://leetcode.com/problems/split-array-largest-sum/' },
      { name: '1011. Capacity To Ship Packages Within D Days', url: 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/' },
      { name: '1552. Magnetic Force Between Two Balls', url: 'https://leetcode.com/problems/magnetic-force-between-two-balls/' },
      { name: '4. Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
    ],
  },
  {
    title: '4. DFS + Backtracking',
    description:
      'Explores all possible solutions by trying different choices and undoing them if they don\'t work.',
    visualTitle: 'DFS + Backtracking (Subsets of [1,2,3])',
    visualContent: (
      <div className="text-left font-mono whitespace-pre text-sm leading-relaxed p-4 bg-[#f8f9fa] rounded">
{`Start: []
  \u251C\u2500 [1]
  \u2502   \u251C\u2500 [1,2]
  \u2502   \u2502   \u2514\u2500 [1,2,3]
  \u2502   \u2514\u2500 [1,3]
  \u251C\u2500 [2]
  \u2502   \u2514\u2500 [2,3]
  \u2514\u2500 [3]

All Subsets:
[[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]`}
      </div>
    ),
    pseudoTitle: 'Pseudocode Example: Subsets',
    pseudocode: `function subsets(nums):
    result = []
    
    def backtrack(start, current):
        result.append(current.copy())
        
        for i in range(start, len(nums)):
            # Include the current element
            current.append(nums[i])
            # Move to the next element
            backtrack(i + 1, current)
            # Backtrack (exclude the current element)
            current.pop()
    
    backtrack(0, [])
    return result`,
    problems: [
      { name: '78. Subsets', url: 'https://leetcode.com/problems/subsets/' },
      { name: '90. Subsets II', url: 'https://leetcode.com/problems/subsets-ii/' },
      { name: '46. Permutations', url: 'https://leetcode.com/problems/permutations/' },
      { name: '79. Word Search', url: 'https://leetcode.com/problems/word-search/' },
      { name: '51. N-Queens', url: 'https://leetcode.com/problems/n-queens/' },
    ],
  },
  {
    title: '5. Top-Down DP with Memoization',
    description:
      'Breaks down problems into smaller subproblems and stores their solutions to avoid redundant calculations.',
    visualTitle: 'DP Memoization Approach',
    visualContent: (
      <p className="text-sm text-[#555]">
        In the unique paths problem, we build a DP table where each cell (i,j) represents the number
        of ways to reach it from the start. Each cell's value is the sum of the cell above it and the
        cell to its left.
      </p>
    ),
    pseudoTitle: 'Pseudocode Example: Unique Paths',
    pseudocode: `function uniquePaths(m, n):
    memo = 2D array of size m x n, initialized with -1
    
    function dp(row, col):
        # Base cases
        if row == m - 1 and col == n - 1:
            return 1
        if row >= m or col >= n:
            return 0
            
        # Check if already computed
        if memo[row][col] != -1:
            return memo[row][col]
            
        # Recursive case: move right + move down
        memo[row][col] = dp(row + 1, col) + dp(row, col + 1)
        return memo[row][col]
    
    return dp(0, 0)`,
    problems: [
      { name: '62. Unique Paths', url: 'https://leetcode.com/problems/unique-paths/' },
      { name: '1143. Longest Common Subsequence', url: 'https://leetcode.com/problems/longest-common-subsequence/' },
      { name: '416. Partition Equal Subset Sum', url: 'https://leetcode.com/problems/partition-equal-subset-sum/' },
      { name: '494. Target Sum', url: 'https://leetcode.com/problems/target-sum/' },
      { name: '1235. Maximum Profit in Job Scheduling', url: 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/' },
    ],
  },
]

export default function LeetcodePatterns() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-[system-ui,'-apple-system','BlinkMacSystemFont','Segoe_UI','Roboto',sans-serif] leading-relaxed">
      <SEO
        title="5 Essential LeetCode Patterns for Technical Interviews - The Hustler Dev"
        description="Master these 5 essential LeetCode patterns to ace your technical interviews and improve your problem-solving skills."
        url="https://www.nerdynikhil.com/thehustlerdev/resources/5-essential-leetcode-patterns"
      />

      {/* Header */}
      <header className="bg-white border-b border-[#e0e0e0] py-5 sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-5">
          <Link
            to="/thehustlerdev"
            className="text-[#1a1a1a] no-underline text-sm font-medium hover:opacity-70 transition-opacity"
          >
            &larr; Back to Resources
          </Link>
        </div>
      </header>

      <main>
        <article className="py-15 max-w-[800px] mx-auto px-5">
          <h1 className="text-4xl md:text-[2.5rem] font-semibold mb-4 leading-tight">
            5 Essential LeetCode Patterns for Technical Interviews
          </h1>
          <p className="text-xl text-[#666] mb-12 leading-relaxed">
            Mastering these five LeetCode patterns will help you solve a wide range of coding
            interview problems efficiently. Each pattern comes with practice problems to reinforce
            your understanding.
          </p>

          <div className="space-y-0">
            {patterns.map((pattern) => (
              <div
                key={pattern.title}
                className="mb-10 pb-10 border-b border-[#e0e0e0] last:border-b-0 last:mb-0 last:pb-0"
              >
                <h2 className="text-2xl font-semibold mb-3 text-[#1a1a1a]">{pattern.title}</h2>
                <p className="text-base leading-relaxed text-[#666] mb-4">{pattern.description}</p>

                {/* Visualization */}
                <div className="bg-[#f8f9fa] rounded-md p-6 my-6 border-l-4 border-[#4a6bdf] overflow-x-auto text-center">
                  <h4 className="mt-0 mb-3 text-[#2c3e50] font-semibold border-b border-[#eaecef] pb-2">
                    {pattern.visualTitle}
                  </h4>
                  {pattern.visualContent}
                </div>

                {/* Pseudocode */}
                <div className="bg-[#f8f9fa] rounded-md p-4 my-4 overflow-x-auto">
                  <h4 className="mt-0 mb-3 text-[#2c3e50] font-semibold border-b border-[#eaecef] pb-2">
                    {pattern.pseudoTitle}
                  </h4>
                  <pre className="bg-[#f0f2f5] p-4 rounded overflow-x-auto font-mono text-sm leading-relaxed m-0 whitespace-pre">
                    {pattern.pseudocode}
                  </pre>
                </div>

                {/* Practice Problems */}
                <p className="text-base leading-relaxed text-[#666]">
                  <strong>Practice Problems:</strong>{' '}
                  {pattern.problems.map((problem, i) => (
                    <span key={problem.url}>
                      <a
                        href={problem.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4a6bdf] hover:underline"
                      >
                        {problem.name}
                      </a>
                      {i < pattern.problems.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Note */}
          <div className="bg-[#f8f9fa] border-l-4 border-[#1a1a1a] p-6 rounded-md mt-12">
            <p className="text-base leading-relaxed text-[#666] m-0">
              <strong className="text-[#1a1a1a]">Pro Tip:</strong> When practicing these patterns,
              focus on understanding the underlying concept rather than just memorizing solutions.
              Try to solve each problem multiple times until you can implement it without looking at
              the solution. Time yourself to improve your coding speed and efficiency.
            </p>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-[#e0e0e0] text-sm text-[#666]">
        <div className="max-w-[1400px] mx-auto px-5">
          <p className="text-base text-[#6e6e73] mb-4">
            Follow{' '}
            <a
              href="https://www.instagram.com/thehustlerdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007aff] no-underline font-medium hover:underline"
            >
              @thehustlerdev
            </a>{' '}
            on Instagram for more tips and resources.
          </p>
          <p className="mt-5">
            <Link
              to="/thehustlerdev"
              className="text-[#6e6e73] no-underline text-sm hover:text-[#007aff]"
            >
              &larr; Back to Resources
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
