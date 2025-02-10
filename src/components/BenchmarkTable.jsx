import { benchmarkData } from "@/lib/benchmarkData";

export default function BenchmarkTable() {
    return (
        <>
            <div className="flex flex-col gap-3 mt-10 mx-10 px-3">
                <div className="text-xl mb-3">Model Performance Benchmarks</div>
                <div className="overflow-x-auto rounded-lg border border-white/20">
                    <table className="w-full">
                        <thead className="bg-ailab-purple">
                            <tr>
                                <th className="px-6 py-4 text-left">Benchmarks</th>
                                {benchmarkData.models.map((data) => (
                                    <th key={data.id} className="px-6 py-4 text-right">
                                        {data.name}<br /><span className="text-white/30">{data.version}</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 font-bold text-ailab-purple">English</td>
                                {Array(benchmarkData.models.length).fill(null).map((_, i) => (
                                    <td key={i} className="px-6 py-4"></td>
                                ))}
                            </tr>
                            {benchmarkData.categories.English.map(([name, wb1, ...scores],  index) => (
                                <tr className={index % 2 === 0 ? 'bg-white/5' : ''}>
                                    <td className="px-6 py-4">{name}</td>
                                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{wb1}</td>
                                    {scores.map((score) => (
                                        <td className="px-6 py-4 text-right">{score}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="px-6 py-4 font-bold text-ailab-purple">Code</td>
                                {Array(benchmarkData.models.length).fill(null).map((_, i) => (
                                    <td key={i} className="px-6 py-4"></td>
                                ))}
                            </tr>
                            {benchmarkData.categories.Code.map(([name, wb1, ...scores],  index) => (
                                <tr className={index % 2 === 0 ? 'bg-white/5' : ''}>
                                    <td className="px-6 py-4">{name}</td>
                                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{wb1}</td>
                                    {scores.map((score) => (
                                        <td className="px-6 py-4 text-right">{score}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="px-6 py-4 font-bold text-ailab-purple">Math</td>
                                {Array(benchmarkData.models.length).fill(null).map((_, i) => (
                                    <td key={i} className="px-6 py-4"></td>
                                ))}
                            </tr>
                            {benchmarkData.categories.Math.map(([name, wb1, ...scores],  index) => (
                                <tr className={index % 2 === 0 ? 'bg-white/5' : ''}>
                                    <td className="px-6 py-4">{name}</td>
                                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{wb1}</td>
                                    {scores.map((score) => (
                                        <td className="px-6 py-4 text-right">{score}</td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="px-6 py-4 font-bold text-ailab-purple">Azerbaijani</td>
                                {Array(benchmarkData.models.length).fill(null).map((_, i) => (
                                    <td key={i} className="px-6 py-4"></td>
                                ))}
                            </tr>
                            {benchmarkData.categories.Azerbaijani.map(([name, wb1, ...scores],  index) => (
                                <tr className={index % 2 === 0 ? 'bg-white/5' : ''}>
                                    <td className="px-6 py-4">{name}</td>
                                    <td className="px-6 py-4 text-right font-semibold text-ailab-purple">{wb1}</td>
                                    {scores.map((score) => (
                                        <td className="px-6 py-4 text-right">{score}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-sm text-balance text-white/60 mt-2">
                *AILab WB1 represents a significant leap forward in the field of large language models, combining exceptional performance in multiple domains with a unique ability to excel in specific tasks.
                </div>
            </div>
        </>
    );
}