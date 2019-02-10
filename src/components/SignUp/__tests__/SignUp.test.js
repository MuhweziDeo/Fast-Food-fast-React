import React from 'react'
import {shallow} from 'enzyme'
import SignUp from '../SignUp'

describe('<SignUp/>',()=>{
    it('should render without crushing',()=>{
        const wrapper=shallow(<SignUp/>)
        expect(wrapper).toMatchSnapshot()
    })
})