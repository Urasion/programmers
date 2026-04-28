function solution(m, n, h, w, drops) {
    const arr = Array.from({ length: m}, () => Array(n).fill(Infinity));
    for(let i =0; i<drops.length; i++){
        arr[drops[i][0]][drops[i][1]] = i
    }
    const min_arr = Array.from({ length: m }, () => Array(n - w + 1).fill(Infinity));
    for (let i = 0; i < m; i++) {
        const deque = [];
        let head = 0;
        for (let j = 0; j < n; j++) {
            if (head < deque.length && deque[head] < j - w + 1) {
                head++; 
            }
            while (head < deque.length && arr[i][deque[deque.length - 1]] >= arr[i][j]) {
                deque.pop();
            }
            deque.push(j);
            if (j >= w - 1) {
                min_arr[i][j - w + 1] = arr[i][deque[head]];
            }
        }
    }
    const final_arr = Array.from({ length: m - h + 1 }, () => Array(n - w + 1).fill(Infinity));
     for (let j = 0; j <= n - w; j++) {
        const deque = [];
        let head = 0;
        
        for (let i = 0; i < m; i++) {
       
            if (head < deque.length && deque[head] < i - h + 1) {
                head++;
            }
            while (head < deque.length && min_arr[deque[deque.length - 1]][j] >= min_arr[i][j]) {
                deque.pop();
            }    
            deque.push(i);
            if (i >= h - 1) {
                final_arr[i - h + 1][j] = min_arr[deque[head]][j];
            }
        }
    }
   
  let time = -1;
  let position = [0, 0];
  for (let i = 0; i <= m - h; i++) {
    for (let j = 0; j <= n - w; j++) {
      if (final_arr[i][j] > time) {
        time = final_arr[i][j];
        position = [i, j];
      }
    }
  }
return position;
}
