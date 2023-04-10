import {getShoppingCart} from "../../utilities/fakedb";

const featureJobsLoader = async () => {
    const loadedJobs = await fetch('featurejobs.json');
    const jobs = await loadedJobs.json();

    const storedJobs = getShoppingCart();
    const savedJOb = [];

    for(const id in storedJobs){
        const addedJob = jobs.find(pd => pd.id === id);
        if(addedJob){
            const quantity = storedJobs[id];
            addedJob.quantity = quantity ;
            savedJOb.push(addedJob);
        }
    }
    //console.log(jobs);
    return savedJOb ;
}

export default featureJobsLoader ;