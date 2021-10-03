import ListDetails from "./ListDetails";
const Employee = [
    { "id": "E01", "name": "Gaurav Chouhan", "email": "gaurav.chouha@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E02", "name": "Neeraj Upadhyay", "email": "neeraj.upadhyay@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E03", "name": "Rahul Ghosh", "email": "rahul.ghosh@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E04", "name": "Anushka Bansal", "email": "anushka.bansal@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E05", "name": "Gopal Rajput", "email": "gopal.rajput@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E06", "name": "Abhijeet Rajak", "email": "abhijeet.rajak@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E07", "name": "Amruta Khamkar", "email": "amruta.khamkar@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E08", "name": "Neha Kumari", "email": "neha.kumari@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E09", "name": "Sujit Kathale", "email": "sujit.kathale@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E10", "name": "Kashyap Patel", "email": "kashyap.patel@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E11", "name": "Prachi Tawde", "email": "prachi.tawde@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E12", "name": "Polsani Deepthi", "email": "deepthi.polsani@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E13", "name": "Madhuri Ambole", "email": "madhuri.ambole@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E14", "name": "Mihir Adelkar", "email": "mihir.adelkar@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E15", "name": "Apurva Khurud", "email": "apurva.khurud@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E16", "name": "Ashwathy Paniker", "email": "ashwathy.paniker@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E17", "name": "Chinmay Kumbhare", "email": "chinmay.kumbhare@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E18", "name": "Farhat Khan", "email": "farhat.khan@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E19", "name": "Omkar Modgi", "email": "omkar.modgi@neosoftmail.com", "technology": "JavaScript" },
    { "id": "E20", "name": "Kamesh Rane", "email": "kamesh.rane@neosoftmail.com", "technology": "JavaScript" },

]
const List = () => {
    return (
        <ListDetails Employe={Employee} />
    )
}
export default List;