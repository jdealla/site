export function ShotChart(props) {
    const { hotzones } = props

    return (
        <svg viewBox="0 0 300 250">
            <polygon className="hz_3pt_left" points="1,0 1,175 40,150 20,130 20,0" stroke-width="2" stroke="#EAEAEA" fill={hotzones.hz_3pt_left === "Hot" ? "#ED1B24" : "#000000"}></polygon>
            <polygon className="hz_mid_left_corner" points="20,0 20,130 40,150 90,115 70,95 70,0" stroke-width="2" stroke="#EAEAEA" fill="#715132"></polygon>
            <polygon className="hz_close_left" points="70,0 70,95 103,127 140,60 125,45 125,0" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="hz_close_middle" points="103,127 140,60 160,60 197,127 150,170" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="hz_close_right" points="230,0 230,95 197,127 160,60 175,45 175,0" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="shot-zone-6" points="1,175 90,115 112,133 125,140 105,190" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="shot-zone-7" points="80,250 125,140 150,143 175,140 220,250" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="shot-zone-8" points="299,175 210,115 188,133 175,140 195,190" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="shot-zone-1" points="125,0 175,0 175,45 125,45" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A" style="stroke-dasharray: 95,50;"></polygon>
            <path className="shot-zone-1" d="M175 45 Q 150 80 125 45" stroke="#EAEAEA" fill="#A52A2A" stroke-width="2"></path>
            <polygon className="shot-zone-9" points="280,0 280,130 260,150 210,115 230,95 230,0" stroke-width="2" fill="#A52A2A" stroke="#EAEAEA"></polygon>
            <polygon className="shot-zone-14" points="299,0 299,175 259,150 279,130 279,0" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A"></polygon>
            <polygon className="shot-zone-11" points="1,175 1,250 80,250 105,190 80,180 40,150" stroke-width="2" stroke="#EAEAEA" fill="#A52A2A" style="stroke-dasharray: 180,115;"></polygon>
            <polygon className="shot-zone-12" points="80,250 220,250 195,190 154,201 105,190" stroke-width="2" stroke="#EAEAEA" fill="#715132" style="stroke-dasharray: 180,115;"></polygon>
            <polygon className="shot-zone-13" points="299,175 299,250 220,250 195,192 220,181 260,150" stroke-width="2" stroke="#EAEAEA" fill="#715132"></polygon>
            <path d="M70 95 Q 150 192 230 95" stroke="#EAEAEA" fill="transparent" stroke-width="2"></path>
            <path d="M40 150 Q 150 250 260 150" stroke="#EAEAEA" fill="transparent" stroke-width="2"></path>
        </svg>
    )
}