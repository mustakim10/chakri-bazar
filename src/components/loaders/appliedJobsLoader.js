import { getShoppingCart } from "../../utilities/fakedb";

const appliedJobsLoader = async () =>{
const loadedAppliedJobs = await fetch('featurejobs.json');
const appliedJobs = await loadedAppliedJobs.json();

const storedAppliedJobs = getShoppingCart();
const savedAppliedJobs = [];

console.log(savedAppliedJobs);

for(const num in storedAppliedJobs){
    const addedAppliedJob = appliedJobs.find(pd => pd.num === num);
    if(addedAppliedJob){
        const quantity = storedAppliedJobs[num];
        addedAppliedJob.quantity = quantity ;
savedAppliedJobs.push(addedAppliedJob);
    }
}

return savedAppliedJobs;
}

export default appliedJobsLoader ;