import Layout from "../../components/layout"
import Attributes from "../../components/attributes"
import { getPlayersIds, getPlayerData } from "../../lib/players"

export default function Player({ playerData }) {
    const shootingRatings = () => {
        const shooting = [
            { name: 'Driving Layup', rating: playerData.driving_layup },
            { name: 'Post Fade', rating: playerData.post_fade },
            { name: 'Post Hook', rating: playerData.post_hook },
            { name: 'Post Moves', rating: playerData.post_moves },
            { name: 'Draw Foul', rating: playerData.draw_foul },
            { name: 'Shot Close', rating: playerData.shot_close },
            { name: 'Shot Mid', rating: playerData.shot_mid },
            { name: 'Shot Three', rating: playerData.shot_3pt },
            { name: 'Free Throw', rating: playerData.free_throw },
            { name: 'Standing Dunk', rating: playerData.standing_dunk },
            { name: 'Driving Dunk', rating: playerData.driving_dunk },
        ]
        return <Attributes attributes={shooting} />
    }

    const passingRatings = () => {
        const passing = [
            { name: 'Ball Handle', rating: playerData.ball_handle },
            { name: 'Pass IQ', rating: playerData.passing_iq },
            { name: 'Pass Accuracy', rating: playerData.passing_accuracy },
        ]
        return <Attributes attributes={passing} />
    }

    const defenseRatings = () => {
        const defense = [
            { name: 'Block', rating: playerData.block },
            { name: 'Steal', rating: playerData.steal },
            { name: 'Perimeter Defense', rating: playerData.perimeter_defense },
            { name: 'Interior Defense', rating: playerData.interior_defense },
        ]
        return <Attributes attributes={defense} />
    }

    const reboundRatings = () => {
        const rebound = [
            { name: 'Offensive Rebound', rating: playerData.offensive_rebound },
            { name: 'Defensive Rebound', rating: playerData.defensive_rebound },
        ]
        return <Attributes attributes={rebound} />
    }

    const athleticismRatings = () => {
        const athleticism = [
            { name: 'Speed', rating: playerData.speed },
            { name: 'Speed with Ball', rating: playerData.speed_with_ball },
            { name: 'Acceleration', rating: playerData.acceleration },
            { name: 'Vertical', rating: playerData.vertical },
            { name: 'Strength', rating: playerData.strength },
            { name: 'Stamina', rating: playerData.stamina },
            { name: 'Hustle', rating: playerData.hustle },
            { name: 'Lateral Quickness', rating: playerData.lateral_quickness },
        ]
        return <Attributes attributes={athleticism} />
    }

    const mentalRatings = () => {
        const mental = [
            { name: 'Pass Perception', rating: playerData.pass_perception },
            { name: 'Defensive Consistency', rating: playerData.defensive_consistency },
            { name: 'Offensive Consistency', rating: playerData.offensive_consistency },
            { name: 'Help Defense IQ', rating: playerData.help_defense_iq },
            { name: 'Shot IQ', rating: playerData.shot_iq },
        ]
        return <Attributes attributes={mental} />
    }

    return (
        <Layout>
            <div className="container is-fluid ">
                <div className="container ">
                    <div className="columns ">
                        <div className="column is-full">
                            <p className="title">{playerData.name}</p>
                            <p className="subtitle">
                                Overall: {playerData.overall}
                                <br />
                                Position: {playerData.position}
                            </p>
                        </div>
                    </div>
                    <div className="columns ">
                        <div className="column is-full">
                            <div className="buttons has-addons">
                                <button className="button is-active">Stats</button>
                                <button className="button">Badges</button>
                                <button className="button">Tendencies</button>
                                <button className="button">Animations</button>
                                <button className="button">Best Diamond Shoe</button>
                            </div>
                        </div>
                    </div>
                    <div className="columns ">
                        <div className="column is-one-fifth">
                            <p className="has-text-weight-semibold "> Shooting </p>
                            {shootingRatings()}
                            <p className="has-text-weight-semibold "> Passing </p>
                            {passingRatings()}
                            <p className="has-text-weight-semibold "> Defense </p>
                            {defenseRatings()}
                        </div>
                        <div className="column is-one-fifth">
                            <p className="has-text-weight-semibold "> Rebounding </p>
                            {reboundRatings()}
                            <p className="has-text-weight-semibold "> Athleticism </p>
                            {athleticismRatings()}
                            <p className="has-text-weight-semibold "> Mental </p>
                            {mentalRatings()}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPlayersIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const playerData = getPlayerData(params.id)
    return {
        props: {
            playerData
        }
    }
}