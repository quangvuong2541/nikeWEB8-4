import React from 'react'
import { makeStyles } from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux';
import { Hidden } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as action from "../userOrder/module/Action/action"
import { act } from 'react-dom/test-utils';

const useStyles = makeStyles((theme) => ({
    Container: {
        padding: '40px 48px',
        fontSize: 16,
        minHeight: 500,
    },
    Title: {
        fontSize: 24,
        marginBottom: 36,
    },
    Setting: {
        width: 266,
        paddingRight: 24,
        float: 'left',
    },
    SettingItem: {
        lineHeight: 1.75,
        cursor: 'pointer',
    },
    SettingItemIcon: {
        paddingRight: 20,
        width: 26,
    },
    AccountContainer: {
        marginLeft: 406,

    },
    AccountDetail: {
        width: 415,

    },
    Detail: {
        width: '100%',
        marginTop: '10px',
        padding: '18px 14px',
        fontSize: 18,
    },
    inputContainer: {
        marginBottom: 18,
    },
    inputValid: {
        color: '#fe0000',
    },
    ButtonSubmit: {
        outline: 'none',
        lineHeight: '24px',
        fontSize: 16,
        cursor: 'pointer',
        padding: '7px 28px',
        backgroundColor: 'white',
        borderRadius: 30,
        border: '1px solid #757575',
        marginTop: 15,
    }
}));
const UserProfiles = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const userLocal = useSelector(state => state.reducerSignSignUp.user)

    const age = []
    for (var i = 0; i < 100; i++) {
        age.push(i + 1)
    }
    const listAge = age.map((item, index) => {
        return (
            <option key={index}>
                {item}
            </option>
        )
    })
    const [ageSelect, setAgeSelect] = React.useState(
        userLocal ? userLocal.user.age : null
    )
    const HandleAgeSelect = (event) => {
        setAgeSelect(event.target.value)
    }
    // validation form 
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (data) => {
        
        const {token} = JSON.parse(localStorage.getItem("user"))
        dispatch(action.updateProfileAPI(data, token))
    }
    return (
        <div>
            <form id="formSignIn" onSubmit={handleSubmit(onSubmit)}>
                {/*Input*/}
                <div className={classes.inputContainer}>
                    <input
                        type="text"
                        placeholder="Email"
                        className={classes.input}
                        name="email"
                        defaultValue={userLocal.user.email}
                        {...register("email", {
                            required: "This input is required",
                            pattern: {
                                value: "",
                                message: "This input is number only."
                            },
                            minLength: {
                                value: "",
                                message: "This input must exceed 10 characters"
                            }
                        })}
                    />

                </div>
                <div className={classes.inputContainer}>
                    <input
                        type="password"
                        placeholder="Password"
                        className={classes.input}
                        name="password"
                        // style={{ borderColor: errors.password && "red" }}
                        // ref={register({
                        //   required: true,
                        // })}
                        {...register("password", { required: true })}
                    />

                </div>
                <div className={classes.inputContainer}>
                    <input
                        type="text"
                        placeholder="name"
                        className={classes.input}
                        name="name"
                        // style={{ borderColor: errors.password && "red" }}
                        // ref={register({
                        //   required: true,
                        // })}
                        defaultValue={userLocal.user.name}
                        {...register("name", { required: true })}
                    />

                </div>

                <div className={classes.inputContainer}>
                    <div>age:</div>
                    <select
                        className={classes.Detail}
                        name="age"
                        defaultValue={ageSelect}
                        {...register("name", { required: true })}

                    >
                        {listAge}
                    </select>
                </div>

                <input
                    className={classes.buttonSignIn}
                    type="submit"
                    value="SIGN IN"
                />
            </form>
        </div>
    )

}

export default UserProfiles