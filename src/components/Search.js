import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/AlertContext'
import { GithubContext } from '../context/github/GithubContext'

export const Search = () => {
    const [value, setValue] = useState('')
    const github = useContext(GithubContext)
    const alert = useContext(AlertContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Input user data')
        }
    }


    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                placeholder="Input nickname"
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}