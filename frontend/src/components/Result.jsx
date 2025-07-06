import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
    const { state } = useLocation();
    const [modelResult, setModelResult] = useState(state?.modelResult || null);

    // Fallback for page reload (when state is lost)
    useEffect(() => {
        if (!state?.modelResult) {
            const stored = localStorage.getItem("modelResult");
            if (stored) {
                setModelResult(JSON.parse(stored));
            }
        }
    }, [state]);

    if (!modelResult) return <p className="text-center mt-10 text-xl text-red-500">No result found. Please upload an image again.</p>;

    return (
        <div className="text-center mt-10 px-4">
            <h1 className="text-4xl font-bold mb-4 text-white">Detection Result</h1>
            <p className="text-2xl mb-2 text-white">
                Result: <strong className={modelResult.result === "Fake" ? "text-red-600" : "text-green-600"}>{modelResult.result}</strong>
            </p>
            <p className="text-xl mb-6 text-gray-300">Probability: <strong>{modelResult.probability}%</strong></p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Original Image</h3>
                    <img
                        src={`http://127.0.0.1:5000${modelResult.image}`}
                        alt="Original"
                        className="w-64 mx-auto rounded-xl shadow-md"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Highlighted Fake Regions</h3>
                    <img
                        src={`http://127.0.0.1:5000${modelResult.processed_image}`}
                        alt="Processed"
                        className="w-64 mx-auto rounded-xl shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResultPage;
