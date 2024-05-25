import List from "./List";

const ListContainer = () => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">Mei 2024</h2>
            <div className="bg-white rounded-md shadow-md w-full p-6 flex flex-col gap-8">
                <List />
                <List />
                <List />
            </div>
        </div>
    );
};

export default ListContainer;
