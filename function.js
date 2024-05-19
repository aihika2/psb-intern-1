let nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
let n = 3;

function merge(nums1, m, nums2, n){
    return nums1 = nums1.concat(nums2).sort().splice(n)
}
