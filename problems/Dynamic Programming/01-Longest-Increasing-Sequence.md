---
sidebar_position: 1
---

# Longest Increasing Subsequence

We are given an array with `n` numbers: `a[0... n-1]` . The task is to find the longest, strictly increasing, subsequence in `a`.

## Solution in `O(nlogn)` using dynamic programming and Binary search

We will use the dynamic programming array `d[0 ... n-1]`. `d[i]` will be the element at which a subsequence of length `i` terminates. If there are multiple such sequences, then we take the one that ends in the smallest element.

Initially we assume `d[0] = −∞` and for all other elements `d[i] = ∞`.

We will gradually process the numbers, first `a[0]`, then `a[1]`, etc, and in each step maintain the array `d[]` so that it is up to date.

After processing all the elements of a[] the length of the desired subsequence is the largest `l` with `d[l] < ∞`.

<details><summary>C++ Code</summary>

```cpp
#include <iostream>
#include <vector>
using namespace std;

int lis(vector<int> const& a){
    int n = a.size();
    const int INF = 1e9;
    vector<int> d(n + 1, INF);
    d[0] = -INF;
    for (int i = 0; i < n; i++){
        for (int j = 1; j <= n; j++){
            if (d[j - 1] < a[i] && a[i] < d[j]){
                d[j] = a[i];
            }
        }
    }
    int ans = 0;
    for (int i = 0; i <= n; i++){
        if (d[i] < INF) ans = i;
    }
    return ans;
}
int main(){
    vector<int> a = {3, 2, 4, 5, 6, 9, 1};
    cout << "Length of the longest increasing subsequence: ";
    cout << lis(a);
    return 0;
}
```
## Output
```txt
Length of the longest increasing subsequence: 5
```

</details>
