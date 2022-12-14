import { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from "axios"
import 'react-responsive-modal/styles.css';
import 'react-tabs/style/react-tabs.css';
import AdvanceTab from './AdvanceTab';

const PopupModal = ({ open, onCloseModal }) => {
    const apiKey = "Z8Y4CS4Q1WK7C4EVMCR96WGG41GJVR553C"
    const [maxfeeInUSD, setMaxFeeInUSD] = useState(0.0);
    const [gas,] = useState(0.00753);
    const [gaslimit,] = useState(0.008215);
    const [ethPrice, setethPrice] = useState(null);
    const [error, setError] = useState(null);
    const [showAdvance, setShowAdvance] = useState(false)
    const handleSwitchToggle = () => setShowAdvance(!showAdvance)
    useEffect(() => {
        (async () => {
            try {
                let datauri = `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${apiKey}`
                let { data } = await axios.get(datauri)
                const { ethusd } = data.result;
                setethPrice(ethusd)
            } catch (error) {
                setError(error.message)
            }
        })()
    }, []);

    useEffect(() => {
        if (ethPrice) {
            setMaxFeeInUSD((ethPrice * gaslimit).toFixed('4'))
        }
    }, [ethPrice]);
    return (
        <Modal
            open={open}
            onClose={onCloseModal}
            center
            showCloseIcon={false}
            classNames={{
                modal: 'w-96 rounded'
            }}
        >
            {
                !error ? <><h2 className='font-medium text-gray-9 text-md font-Karla'>Gas Setting</h2>
                    <h1 className='font-bold text-2xl text-gray-9 text-center w-full p-3 font-Karla'>~{gas}</h1>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-gray-9 text-md'>Max fee: {gaslimit}</h4>
                        <p className='text-gray-4'>${maxfeeInUSD}</p>
                    </div>
                    <div className='my-4'>
                        <h4 className='text-gray-9 text-md'>Priority</h4>
                    </div>
                    <div>
                        <Tabs>
                            <TabList className="flex justify-center space-x-3">
                                <Tab className="bg-gray-2 text-gray-9 cursor-pointer active:bg-primary rounded-md py-2 px-6">Low</Tab>
                                <Tab className="bg-gray-2 text-gray-9 cursor-pointer active:bg-primary rounded-md py-2 px-6">Medium</Tab>
                                <Tab className="bg-gray-2 text-gray-9 cursor-pointer active:bg-primary rounded-md py-2 px-6">High</Tab>
                            </TabList>
                            <TabPanel>
                            </TabPanel>
                            <TabPanel>
                            </TabPanel>
                            <TabPanel>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div className='flex mt-5 justify-between items-center'>
                        <h4 className='text-gray-9 text-md'>Advanced Options</h4>
                        <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" onChange={handleSwitchToggle} />
                            <div className="w-12 h-6 bg-gray-4 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    {
                        showAdvance && <AdvanceTab />
                    }
                </> : <>{error}</>
            }
        </Modal>
    )
}

export default PopupModal