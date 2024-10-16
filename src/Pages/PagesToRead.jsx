/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { getWish } from "../Utilities/LStorage";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
};
const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PagesToRead = () => {
    const lcBooks = getWish()
    return (
        <div className="max-w-screen-xl mx-auto my-10">
            <Helmet>
                <title>Wishlist | Pages to read</title>
            </Helmet>
            <BarChart
                width={1280}
                height={700}
                data={lcBooks}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages" />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {lcBooks.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesToRead;