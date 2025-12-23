import { SlidersHorizontal, Zap } from "lucide-react";

export default function TabHeader({ props }: { props: any }) {
    return (
        <div className="flex justify-between border border-border p-2">
            <div className="">
                <h2>{props.name}</h2>
            </div>
            <div className="flex justify-between border border-border rounded-full p-2">
                <div className="flex gap-2 justify-between">
                    <div className="flex gap-2">
                        <Zap />
                        <p>{props.number}</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 25" {...props}>
                            <path fill="#000000" d="M16.886 9.468a.47.47 0 0 1-.313.124H5.584c-.39 0-.587-.446-.317-.707l1.805-1.74a.46.46 0 0 1 .312-.129h11.032c.394 0 .587.45.313.712zm0 8.576a.47.47 0 0 1-.313.12H5.584c-.39 0-.587-.442-.317-.703l1.805-1.745a.45.45 0 0 1 .312-.124h11.032c.394 0 .587.446.313.707zm0-6.618a.47.47 0 0 0-.313-.12H5.584c-.39 0-.587.442-.317.703l1.805 1.745a.47.47 0 0 0 .312.124h11.032c.394 0 .587-.446.313-.707z"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex gap-2">
                    <div className="flex gap-2">
                        <p>P1</p>
                        <p>P2</p>
                        <p>P3</p>
                    </div>
                    <SlidersHorizontal></SlidersHorizontal>
                </div>
            </div>
        </div>
    )
}