import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Expertise from './skillCategory/Expertise';
import Comfortable from './skillCategory/Comfortable';
import Familiar from './skillCategory/Familiar';
import Tools from './skillCategory/Tools';
import { useState } from 'react';
import TopLoaderAnimation from '../../components/TopLoader/TopLoaderAnimation';
const Skills = () => {
    const [progress, setProgress] = useState(0)
    return (
        <div id='skills' className="mt-16 md:p-5 mb-20 mx-5 ">
            <TopLoaderAnimation progress={progress} setProgress={setProgress}/>
            <h2 className="text-4xl border-l-4  border-orange-400"><span className='ml-2'>Skills</span></h2>

            <div className='max-w-7xl mx-auto'>
                <Tabs>

                    <TabList className="mt-5 mb-12 md:my-12 md:mb-20 md:flex justify-center gap-10 md:shadow-md md:py-3 bg-slate-50 rounded-md ">
                        {/* Expertise Tab */}
                        <Tab onClick={() => setProgress(100)} className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md  font-medium hover:text-orange-500 focus:text-orange-600 focus:border-orange-500 hover:shadow-lg">Expertise</Tab>

                        {/* Comfortable Tab */}
                        <Tab onClick={() => setProgress(100)}  className="text-xl cursor-pointer px-10 py-5    my-2 md:my-0 text-center duration-500 border-2 rounded-md  font-medium hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Comfortable
                        </Tab>

                        {/* Familiar Tab */}
                        <Tab onClick={() => setProgress(100)}  className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md font-medium   hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Familiar
                        </Tab>

                        {/* Tools Tab */}
                        <Tab onClick={() => setProgress(100)}  className="text-xl cursor-pointer px-10 py-5  my-2 md:my-0 text-center duration-500 border-2 rounded-md font-medium  hover:text-orange-500 focus:text-orange-600 focus:border-orange-500  hover:shadow-lg">Tools
                        </Tab>

                    </TabList>

                    {/* Expertise */}
                    <TabPanel>
                        <Expertise/>
                    </TabPanel>

                    {/* comfortable */}
                    <TabPanel>
                       <Comfortable/>
                    </TabPanel>

                    {/* Familiar */}
                    <TabPanel>
                       <Familiar/>
                    </TabPanel>

                    {/* Tools */}
                    <TabPanel>
                        <Tools/>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Skills;