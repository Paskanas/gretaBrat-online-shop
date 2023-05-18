import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import swal from "sweetalert";
import BlackButton from "../Buttons/BlackButton";

const EmailForm = (props) => {
    const errColor = "red";
    const defaultColor = "black";

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [nameColor, setNameColor] = useState(defaultColor);
    const [emailColor, setEmailColor] = useState(defaultColor);
    const [messageColor, setMessageColor] = useState(defaultColor);

    const resetFormColors = () => {
        setNameColor(defaultColor);
        setEmailColor(defaultColor);
        setMessageColor(defaultColor);
    };

    const resetForm = () => {
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
        resetFormColors();
    };

    const sendmail = async (e) => {
        e.preventDefault();

        // const formData = {};
        // formData;
        props.setLoading(true);
        axios
            .post("/contacts", {
                name: name,
                surname: surname,
                email: email,
                message: message,
            })
            .then((res) => {
                if (res.data.status === 200) {
                    resetForm();
                    props.setLoading(false);
                    swal("Success", "Email sent successfuly", "success");
                } else if (res.data.status === 422) {
                    props.setLoading(false);
                    resetFormColors();

                    const messages = Object.keys(res.data.errors).map(
                        (error) => {
                            if (error === "name") {
                                setNameColor(errColor);
                            } else if (error === "email") {
                                setEmailColor(errColor);
                            } else if (error === "message") {
                                setMessageColor(errColor);
                            }
                            return res.data.errors[error];
                        }
                    );

                    swal({
                        title: "Warning",
                        text: messages.join("\n"),
                        type: "warning",
                    });
                }
            })
            .catch((err) => {
                swal({
                    title: "Error",
                    text: "Something went wrong",
                    type: "error",
                });
            });
    };

    return (
        <div>
            <h1 className="h1-color text-center mb-10 ">Get in touch</h1>
            <form className="flex flex-col default-font">
                <label
                    style={{ color: nameColor }}
                    htmlFor=""
                    className="uppercase"
                >
                    Name*
                </label>
                <input
                    type="text"
                    className="bg-neutral-100 placeholder:text-slate-400 border-none mb-4"
                    placeholder="Your name"
                    name="name"
                    required
                    value={name}
                    onChange={() => setName(event.target.value)}
                />
                <label htmlFor="" className="uppercase">
                    Last name
                </label>
                <input
                    type="text"
                    className="bg-neutral-100 placeholder:text-slate-400 border-none mb-4"
                    placeholder="Your last name"
                    name="lastName"
                    value={surname}
                    onChange={() => setSurname(event.target.value)}
                />
                <label
                    style={{ color: emailColor }}
                    className="uppercase"
                    htmlFor=""
                >
                    Email*
                </label>
                <input
                    type="email"
                    className="bg-neutral-100 placeholder:text-slate-400 border-none mb-4"
                    placeholder="Your email address"
                    required
                    name="email"
                    value={email}
                    onChange={() => setEmail(event.target.value)}
                />
                <label
                    className="uppercase"
                    style={{ color: messageColor }}
                    htmlFor=""
                >
                    Message*
                </label>
                <textarea
                    type="text"
                    className="bg-neutral-100 min-h-[9rem] placeholder:text-slate-400 border-none mb-4"
                    placeholder="Enter your message"
                    required
                    name="message"
                    value={message}
                    onChange={() => setMessage(event.target.value)}
                />
                <div className="flex justify-center">
                    <BlackButton
                        loading={props.loading}
                        type="submit"
                        handleClick={sendmail}
                        loaderSize={28}
                    />
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
