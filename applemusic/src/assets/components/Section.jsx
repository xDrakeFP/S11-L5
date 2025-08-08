const Section = ({ title, children }) => {
    return (
        <section className="mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h2 className="h5 my-3">{title}</h2>
            </div>
            {children}
        </section>
    );
};

export default Section;
