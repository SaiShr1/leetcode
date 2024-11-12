var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function (nums, target) {
    var mapObj = {};
    for (var i = 0; i <= nums.length; i++) {
        var diff = target - nums[i];
        if (mapObj[diff]) {
            return [mapObj[diff], 1];
        }
        else {
            mapObj[nums[i]] = i;
        }
    }
};
//# sourceMappingURL=twoSums.js.map