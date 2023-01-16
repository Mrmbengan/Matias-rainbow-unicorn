function animal():string[] {
    return new Array("apa", "orangutang", "gorilla", "get", "giraff")
} 

const nums:string[] = animal()
for (const i in nums) {
    console.log(nums[i])
}

type utvecklare = {
    age: 37;
    name: "Matias";
};