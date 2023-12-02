// import { Tilt } from 'react-tilt'

const SingleSkillsCard = ({item}) => {
    const {svg}=item;
    return (
        <>
                    <div className='tooltip tooltip-warning w-32 h-32 shadow-2xl rounded-xl bg-white' data-tip="HTML5">
                       <img src={svg} alt="" />
                    </div>
                </>
    );
};

export default SingleSkillsCard;