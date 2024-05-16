import { Link } from "@inertiajs/react";

const DataInputForm = ({ auth }) => {
    return (
        <>
            {" "}
            <div>DataInputForm</div>
            <Link
                href={route("logout")}
                method="post"
                as="button"
                className="w-full text-start text-red-600"
            >
                Keluar
            </Link>{" "}
        </>
    );
};

export default DataInputForm;
