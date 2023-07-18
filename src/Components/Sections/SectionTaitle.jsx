 

const SectionTaitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mb-12 text-center mx-auto">
            <p className="text-center  text-orange-800">---{ subHeading }---</p>
            <h3 className=" text-center py-4  border-y-4 uppercase text-4xl "> -{heading}-</h3>
        </div>
    );
};

export default SectionTaitle;