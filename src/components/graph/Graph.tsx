import G6 from "@antv/g6";
import { useEffect, useRef, useState } from "react";

export const Graph = () => {

    // The source data
    const [data, _] = useState({
        // The array of nodes
        nodes: [
            {
                id: 'node1'
            },
            {
                id: 'node2'
            },
        ],
        // The array of edges
        edges: [
            // An edge links from node1 to node2
            {
                source: 'node1',
                target: 'node2',
            },
        ],
    });

    let graph: any = null;
    useEffect((() => {
        if (!graph) {
            // Instantiate the Graph
            graph = new G6.Graph({
                container: 'mountNode',
                width: 1000,
                height: 500,
                fitView: true
            });
        }
        graph.data(data);
        graph.render();
    }), [data]);
    return (
        <div id="mountNode"></div>
    );
}