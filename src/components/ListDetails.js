const ListDetails = (props) => {
    return (
        <>
            <h2 id="employeehead">EMPLOYEE DETAILS</h2>
            <table cellPadding="5" id="listtable" style={{width:"100%"}}>
                <thead id="thead">
                    <tr><th>ID</th><th>Name</th><th>Email</th><th>Technology</th></tr>
                </thead>
                <tbody>
            {props.Employe.map(element=>
                <tr className="tablerow" key={element.id}><td>{element.id}</td><td>{element.name}</td><td>{element.email}</td><td>{element.technology}</td></tr>
            )}
            </tbody>
            </table>
        </>
    );
};
export default ListDetails;
