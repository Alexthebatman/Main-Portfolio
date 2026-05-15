const today = new Date();
const formattedDate = today.toLocaleDateString();
const CurrentDate = () => {
    return (
    <div className="current-date">
        <p>Today's Date: {formattedDate}</p>
    </div>   
    );
};

export default CurrentDate;