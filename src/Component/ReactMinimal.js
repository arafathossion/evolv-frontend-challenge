import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const ReactMinimal = () => {
    return (
        <div >
            <PieChart
                data={[
                    { title: 'One', value: 800, some: '2100 calories', color: '#F45C84' },
                    { title: 'Two', value: 700, some: '2100 calories', color: '#F5C90F' },
                    { title: 'Three', value: 600, some: '2100 calories', color: '#03C7FC' },
                ]}
                totalValue={2100}
                lineWidth={15}
                label={({ dataEntry }) => dataEntry.some}
                labelStyle={{
                  fontSize: '9px',
                  fontWeight: 'bold',
                  fontFamily: 'sans-serif',
                  fill: '#fff',
                }}
                labelPosition={0}
            > dff</PieChart>
        </div>
    );
};

export default ReactMinimal;