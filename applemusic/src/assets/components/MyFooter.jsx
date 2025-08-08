const MyFooter = () => {
    const a = new Date();
    return (
        <div className="p-4 p-custom text-center">
            <h4>Federico Pini - Copyright {a.getFullYear()}</h4>
        </div>
    );
};

export default MyFooter;
