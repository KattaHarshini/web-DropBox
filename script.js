document.addEventListener('DOMContentLoaded', () => {
    const questionsListDiv = document.getElementById('questions-list');
    const hintModal = document.getElementById('hint-modal');
    const hintQuestionTitle = document.getElementById('hint-question');
    const hintContentDiv = document.getElementById('hint-content');
    const closeBtn = document.querySelector('.close-btn');

    // Complete list of Fasal coding questions with hints and answers
    const fasalQuestions = [
        // ... (your existing question array remains the same)
    
        {
    "question": "Reverse a linked list.",
    "description": "Test understanding of linked list data structures and pointer manipulation.",
    "hint": "Iterate through the list and reverse pointers one by one.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}
      </code></pre>
    `
  },
  {
    "question": "Find the longest substring without repeating characters.",
    "description": "Tests knowledge of sliding window and hashing techniques.",
    "hint": "Use a hash map to track characters and a sliding window to expand/shrink.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function lengthOfLongestSubstring(s) {
  let map = new Map();
  let left = 0, maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
      </code></pre>
    `
  },
  {
    "question": "Merge two sorted arrays.",
    "description": "Test merging technique and in-place array manipulation.",
    "hint": "Use two pointers starting from the end to merge in-place.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function merge(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
}
      </code></pre>
    `
  },
  {
    "question": "Detect a cycle in a linked list.",
    "description": "Tests Floyd's Tortoise and Hare algorithm knowledge.",
    "hint": "Use two pointers moving at different speeds to detect cycle.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
      </code></pre>
    `
  },
  {
    "question": "Find the kth largest element in an array.",
    "description": "Test heap or quickselect algorithm usage.",
    "hint": "Use a min-heap or quickselect partitioning to find kth largest.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function findKthLargest(nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
      </code></pre>
    `
  },
  {
    "question": "Implement an LRU cache.",
    "description": "Tests understanding of hash maps and doubly linked lists.",
    "hint": "Use a hash map for fast access and a doubly linked list for order.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    let val = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}
      </code></pre>
    `
  },
  {
    "question": "Find the median of two sorted arrays.",
    "description": "Tests advanced binary search and divide-and-conquer.",
    "hint": "Use binary search to partition arrays efficiently.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  let m = nums1.length, n = nums2.length;
  let low = 0, high = m;
  while (low <= high) {
    let partitionX = Math.floor((low + high) / 2);
    let partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    let maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    let maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    let minX = partitionX === m ? Infinity : nums1[partitionX];
    let minY = partitionY === n ? Infinity : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      if ((m + n) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      } else {
        return Math.max(maxX, maxY);
      }
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
  throw new Error("Input arrays are not sorted");
}
      </code></pre>
    `
  },
  {
    "question": "Serialize and deserialize a binary tree.",
    "description": "Tests tree traversal and string manipulation.",
    "hint": "Use preorder traversal with null markers to serialize.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function serialize(root) {
  const result = [];
  function dfs(node) {
    if (!node) {
      result.push('#');
      return;
    }
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  return result.join(',');
}

function deserialize(data) {
  const nodes = data.split(',');
  function dfs() {
    if (nodes.length === 0) return null;
    const val = nodes.shift();
    if (val === '#') return null;
    const node = { val: Number(val), left: null, right: null };
    node.left = dfs();
    node.right = dfs();
    return node;
  }
  return dfs();
}
      </code></pre>
    `
  },
  {
    "question": "Implement a function to check if a string is a palindrome.",
    "description": "Tests string manipulation and two-pointer technique.",
    "hint": "Use two pointers from start and end moving inward.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function isPalindrome(s) {
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
      </code></pre>
    `
  },
  {
    "question": "Find all anagrams of a string in another string.",
    "description": "Tests sliding window and frequency counting.",
    "hint": "Use a sliding window with frequency maps to compare substrings.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function findAnagrams(s, p) {
  const result = [];
  const pCount = Array(26).fill(0);
  const sCount = Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - aCharCode]++;
    sCount[s.charCodeAt(i) - aCharCode]++;
  }

  for (let i = 0; i <= s.length - p.length; i++) {
    if (i > 0) {
      sCount[s.charCodeAt(i - 1) - aCharCode]--;
      sCount[s.charCodeAt(i + p.length - 1) - aCharCode]++;
    }
    if (arraysEqual(sCount, pCount)) {
      result.push(i);
    }
  }
  return result;

  function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}
      </code></pre>
    `
  },
  {
    "question": "Find the maximum sum subarray (Kadane’s Algorithm).",
    "description": "Tests dynamic programming concepts for subarray sums.",
    "hint": "Iterate and track max sum ending at each index.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
      </code></pre>
    `
  },
  {
    "question": "Check if two strings are anagrams.",
    "description": "Tests string frequency comparison.",
    "hint": "Count characters and compare counts.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let char of s) count[char] = (count[char] || 0) + 1;
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}
      </code></pre>
    `
  },
  {
    "question": "Implement the two-sum problem.",
    "description": "Tests hashing and array traversal.",
    "hint": "Use a map to store complements.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
      </code></pre>
    `
  },
  {
    "question": "Validate parentheses in a string.",
    "description": "Tests stack usage for expression validation.",
    "hint": "Push opening, pop matching closing brackets.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if ('({['.includes(char)) stack.push(char);
    else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}
      </code></pre>
    `
  },
  {
    "question": "Find the majority element in an array.",
    "description": "Tests Boyer-Moore voting algorithm.",
    "hint": "Keep a candidate and a count.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function majorityElement(nums) {
  let count = 0, candidate = null;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
      </code></pre>
    `
  },
  {
    "question": "Generate all permutations of a string.",
    "description": "Tests backtracking techniques.",
    "hint": "Use recursion and swapping.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function permute(str) {
  const res = [];
  const arr = str.split('');

  function backtrack(start = 0) {
    if (start === arr.length - 1) {
      res.push(arr.join(''));
      return;
    }
    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      backtrack(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }

  backtrack();
  return res;
}
      </code></pre>
    `
  },
  {
    "question": "Find the intersection node of two singly linked lists.",
    "description": "Tests linked list traversal and two-pointer approach.",
    "hint": "Use two pointers traversing both lists to find intersection.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;
  let a = headA, b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}
      </code></pre>
    `
  },
  {
    "question": "Calculate the power of a number (x^n).",
    "description": "Tests fast exponentiation (divide and conquer).",
    "hint": "Recursively square results and reduce n by half.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function myPow(x, n) {
  if (n === 0) return 1;
  let half = myPow(x, Math.floor(n / 2));
  if (n % 2 === 0) return half * half;
  return n > 0 ? half * half * x : (half * half) / x;
}
      </code></pre>
    `
  },
  {
    "question": "Find the maximum depth of a binary tree.",
    "description": "Tests tree traversal and recursion.",
    "hint": "Recursively find max depth of left and right subtrees.",
    "answer": `
      <p><strong>Sample Answer (JavaScript):</strong></p>
      <pre><code class="language-javascript">
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
      </code></pre>
    `
  },
  {
    "question": "Tell me about a time you faced a difficult technical challenge and how you resolved it.",
    "description": "Assesses problem-solving skills and perseverance.",
    "hint": "Describe the challenge clearly, explain your approach step-by-step, and highlight the positive outcome or learning.",
    "answer": "<p>During my internship, I encountered a challenging bug in a critical feature that caused data inconsistency. I first reproduced the bug and analyzed the logs. Then I used debugging tools to trace the issue to a race condition in the code. I refactored the code to synchronize the critical section, wrote additional tests, and deployed the fix. The feature worked smoothly afterwards, and I learned the importance of thorough testing and code review.</p>"
  },
  {
    "question": "How do you prioritize tasks when working on multiple projects simultaneously?",
    "description": "Evaluates your time management and organizational skills.",
    "hint": "Talk about frameworks like Eisenhower matrix, to-do lists, or agile methodologies that help you prioritize work.",
    "answer": "<p>I prioritize tasks by assessing their urgency and impact. I use tools like to-do lists and Kanban boards to visualize work and deadlines. For example, I focus first on tasks that unblock others or have the closest deadline. I also allocate time for regular reviews to adjust priorities as needed. This method ensures I meet deadlines without compromising quality.</p>"
  },
  {
    "question": "Describe a situation where you had to work closely with a team member who had a different working style.",
    "description": "Tests your collaboration, communication, and adaptability skills.",
    "hint": "Explain how you adapted, communicated effectively, and ensured the success of the project despite differences.",
    "answer": "<p>In a group project, a teammate preferred detailed upfront planning while I favored iterative development. To align, we scheduled regular sync meetings to share progress and adjust plans. We agreed on a flexible roadmap combining both approaches. This improved communication and led to delivering the project on time with high quality.</p>"
  },
  {
    "question": "What motivates you to work at Dropbox and how do you align with our company culture?",
    "description": "Checks for cultural fit and personal motivation.",
    "hint": "Research Dropbox’s values and mission, then connect them with your own professional goals and values.",
    "answer": "<p>I’m motivated by Dropbox’s commitment to innovation and simplifying collaboration. I value open communication and diversity, which Dropbox emphasizes. I’m passionate about building user-friendly software that makes a difference, aligning with Dropbox’s mission to help people organize and share their work effortlessly.</p>"
  },
  {
    "question": "Give an example of a time when you received constructive criticism. How did you handle it?",
    "description": "Looks for openness to feedback and growth mindset.",
    "hint": "Share a specific experience where feedback helped you improve your skills or approach.",
    "answer": "<p>During a code review, my mentor pointed out that my code lacked proper error handling. I thanked them for the feedback and immediately improved the code by adding comprehensive error checks and fallback mechanisms. This experience helped me write more robust and maintainable code in the future.</p>"
  },
  {
    "question": "How do you stay updated with new technologies and trends relevant to your role?",
    "description": "Assesses your commitment to continuous learning and professional growth.",
    "hint": "Mention sources like blogs, podcasts, online courses, or developer communities that you follow regularly.",
    "answer": "<p>I follow tech blogs like Hacker News and Medium, subscribe to newsletters, and participate in developer communities on GitHub and Stack Overflow. I also take online courses on platforms like Coursera and Udemy to deepen my knowledge and experiment with new tools and frameworks in side projects.</p>"
  }




    ];

    fasalQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-item');

        const title = document.createElement('h3');
        title.textContent = `${index + 1}. ${question.question}`;

        const description = document.createElement('p');
        description.textContent = question.description;

        // Create button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '15px';

        // Hint Button
        const hintButton = document.createElement('button');
        hintButton.textContent = 'Show Hint';
        hintButton.style.padding = '10px 20px';
        hintButton.style.border = 'none';
        hintButton.style.borderRadius = '5px';
        hintButton.style.backgroundColor = '#4CAF50';
        hintButton.style.color = 'white';
        hintButton.style.fontWeight = 'bold';
        hintButton.style.cursor = 'pointer';
        hintButton.style.transition = 'all 0.3s ease';
        hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for hint button
        hintButton.addEventListener('mouseover', () => {
            hintButton.style.backgroundColor = '#45a049';
            hintButton.style.transform = 'translateY(-2px)';
            hintButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('mouseout', () => {
            hintButton.style.backgroundColor = '#4CAF50';
            hintButton.style.transform = 'translateY(0)';
            hintButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        hintButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = `<p>${question.hint}</p>`;
            hintModal.style.display = 'block';
        });

        // Answer Button
        const answerButton = document.createElement('button');
        answerButton.textContent = 'Show Answer';
        answerButton.style.padding = '10px 20px';
        answerButton.style.border = 'none';
        answerButton.style.borderRadius = '5px';
        answerButton.style.backgroundColor = '#2196F3';
        answerButton.style.color = 'white';
        answerButton.style.fontWeight = 'bold';
        answerButton.style.cursor = 'pointer';
        answerButton.style.transition = 'all 0.3s ease';
        answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        
        // Hover effect for answer button
        answerButton.addEventListener('mouseover', () => {
            answerButton.style.backgroundColor = '#0b7dda';
            answerButton.style.transform = 'translateY(-2px)';
            answerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('mouseout', () => {
            answerButton.style.backgroundColor = '#2196F3';
            answerButton.style.transform = 'translateY(0)';
            answerButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        });
        
        answerButton.addEventListener('click', () => {
            hintQuestionTitle.textContent = question.question;
            hintContentDiv.innerHTML = question.answer;
            hintModal.style.display = 'block';
        });

        // Add buttons to container
        buttonContainer.appendChild(hintButton);
        buttonContainer.appendChild(answerButton);

        questionDiv.appendChild(title);
        questionDiv.appendChild(description);
        questionDiv.appendChild(buttonContainer);
        questionsListDiv.appendChild(questionDiv);
    });

    closeBtn.addEventListener('click', () => {
        hintModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === hintModal) {
            hintModal.style.display = 'none';
        }
    });
});