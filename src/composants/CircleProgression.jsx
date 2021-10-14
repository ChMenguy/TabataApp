export default function CircleProgression(){
    return(
        <svg id="animated" viewbox="0 0 100 100"  >
            <circle cx="50" cy="50" r="45" fill="red"/>
            <path fill="none" stroke-linecap="round" stroke-width="5" stroke="#fff"
                stroke-dasharray="251.2,0"
                d="M50 10
                a 40 40 0 0 1 0 80
                a 40 40 0 0 1 0 -80">
                <animate attributeName="stroke-dasharray" from="0,251.2" to="251.2,0" dur="40s"/>           
            </path>
            <text id="count" x="50" y="50" text-anchor="middle" dy="7" font-size="20">100%</text>
        </svg>
    )
}

