import {getShoppingCart} from "../../utilities/fakedb";

const featureJobsLoader = async () => {
    const loadedJobs = await fetch('featurejobs.json');
    const jobs = await loadedJobs.json();

    const storedJobs = getShoppingCart();
    console.log(storedJobs);

    //console.log(jobs);
    return jobs ;
}

export default featureJobsLoader ;