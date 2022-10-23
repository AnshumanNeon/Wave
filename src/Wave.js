import createElement from './Core/createElement';
import createTextElement from './Core/createTextElement';
import Draw from './Core/Draw';
import useState from './Hooks/useState';
import multiclass from '@kbravh/multi-class';
import axios from 'axios';

const Wave = {
    createElement,
    createTextElement,
    Draw,
    useState,
    extend: multiclass,
    axios
};

export default Wave;