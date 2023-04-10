const SectionWrapper = ({ dark, fullVH, children }) => {
    return (
        <section style={{
            width: "100%",
            height: fullVH ? '100vh' : "fit-content",
            paddingTop: "100px",
            paddingBottom: "100px",
            backgroundColor: dark && '#495E57',
        }}>
            <div style={{
                maxWidth: "650px",
                margin: "auto",
                padding: "1.5%"
            }}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;