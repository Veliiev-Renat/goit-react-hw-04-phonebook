import style from '../Filter/Filter.module.css'
import PropTypes from 'prop-types';

export default function Filter({seartch}){
        return(<>
        <h2>Contacts</h2>
        <label className={style.label}>
            Find contact by name
            <input type="text" onChange={seartch} className={style.input} name="filter"/>
        </label>
        </>
    )   
}

Filter.propTypes = {
    seartch:PropTypes.func
}