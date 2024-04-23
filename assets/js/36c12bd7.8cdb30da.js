"use strict";(self.webpackChunkdsa_101=self.webpackChunkdsa_101||[]).push([[380],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(t),c=a,f=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return t?r.createElement(f,l(l({ref:n},m),{},{components:t})):r.createElement(f,l({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7116:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={sidebar_position:1},s="Median of Two Sorted Arrays",d={unversionedId:"arrays/Median-of-2-sorted-arrays",id:"arrays/Median-of-2-sorted-arrays",title:"Median of Two Sorted Arrays",description:"Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",source:"@site/problems/arrays/01-Median-of-2-sorted-arrays.md",sourceDirName:"arrays",slug:"/arrays/Median-of-2-sorted-arrays",permalink:"/DSA101/problems/arrays/Median-of-2-sorted-arrays",editUrl:"https://github.com/GDSCNITD/DSA101/tree/main/problems/arrays/01-Median-of-2-sorted-arrays.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"problemsSidebar",previous:{title:"Tutorial Intro",permalink:"/DSA101/problems/intro"},next:{title:"Longest Increasing Subsequence",permalink:"/DSA101/problems/Dynamic Programming/Longest-Increasing-Sequence"}},m=[{value:"Examples",id:"examples",children:[{value:"Example 1",id:"example-1",children:[],level:3},{value:"Example 2",id:"example-2",children:[],level:3}],level:2},{value:"Constraints",id:"constraints",children:[],level:2},{value:"Solution",id:"solution",children:[{value:"Approach",id:"approach",children:[],level:3},{value:"Pseudocode",id:"pseudocode",children:[],level:3},{value:"Code",id:"code",children:[],level:3},{value:"Complexity Analysis",id:"complexity-analysis",children:[],level:3}],level:2},{value:"Links",id:"links",children:[],level:2}],p={toc:m};function u(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"median-of-two-sorted-arrays"},"Median of Two Sorted Arrays"),(0,i.kt)("p",null,"Given two sorted arrays ",(0,i.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nums2")," of size ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," respectively, return the median of the two sorted arrays."),(0,i.kt)("p",null,"The overall run time complexity should be ",(0,i.kt)("inlineCode",{parentName:"p"},"O(log (m+n))"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"example-1"},"Example 1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"Input: nums1 = [1,3], nums2 = [2]\nOutput: 2.00000\nExplanation: merged array = [1,2,3] and median is 2.\n")),(0,i.kt)("h3",{id:"example-2"},"Example 2"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"Input: nums1 = [1,2], nums2 = [3,4]\nOutput: 2.50000\nExplanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.\n")),(0,i.kt)("h2",{id:"constraints"},"Constraints"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nums1.length == m")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nums2.length == n")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= m <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0 <= n <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= m + n <= 2000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-106 <= nums1[i], nums2[i] <= 106"))),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("h3",{id:"approach"},"Approach"),(0,i.kt)("p",null,"To find the median of the two sorted arrays, we first merge the two arrays into one sorted array. Then, based on whether the combined length is even or odd, we calculate the median accordingly."),(0,i.kt)("h3",{id:"pseudocode"},"Pseudocode"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Merge ",(0,i.kt)("inlineCode",{parentName:"li"},"nums1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nums2")," into a single sorted array ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,i.kt)("li",{parentName:"ol"},"Find the middle index of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),"."),(0,i.kt)("li",{parentName:"ol"},"If the length of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," is even, calculate the median as the average of the two middle elements."),(0,i.kt)("li",{parentName:"ol"},"If the length of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums")," is odd, the median is the middle element itself."),(0,i.kt)("li",{parentName:"ol"},"Return the calculated median.")),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Solution:\n    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:\n        nums = sorted((nums1+nums2))\n        median = 0\n        middle = len(nums)//2\n        if len(nums)%2==0:\n            median = (nums[middle]+nums[middle-1])/2\n        else:\n            median = nums[middle]\n\n        return median\n")),(0,i.kt)("h3",{id:"complexity-analysis"},"Complexity Analysis"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time Complexity"),": O(m + n + log(m + n)), where m and n are the lengths of ",(0,i.kt)("inlineCode",{parentName:"li"},"nums1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nums2")," respectively. This is due to the sorting operation and finding the median."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Space Complexity"),": O(m + n) for the merged array ",(0,i.kt)("inlineCode",{parentName:"li"},"nums"),".")),(0,i.kt)("p",null,"This documentation provides a clear explanation of the problem, the approach used to solve it, the code implementation, and the complexity analysis of the solution."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"LeetCode"),": ",(0,i.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/median-of-two-sorted-arrays/"},"https://leetcode.com/problems/median-of-two-sorted-arrays/"))))}u.isMDXComponent=!0}}]);