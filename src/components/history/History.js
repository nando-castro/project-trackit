import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useAuth } from "../../Providers/auth";
import Header from "../Header";
import Menu from "../Menu";
import Title from "../Title";
import Day from "../DayHistoric";
import { Container, ContainerCalendar, ContainerDays, DateSelected, styleCalendar } from './style';


export default function PageHistory() {

    const [date, setDate] = useState(new Date());
    const { user } = useAuth();
    const [dateHabits, setDateHabits] = useState([]);
    const [habitsHistoric, setHabitsHistoric] = useState([]);
    const [allDates, setAllDates] = useState([]);
    const formatDay = ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();


    useEffect(() => {
        if (user) {
            const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily',
                { headers: { 'Authorization': `Bearer ${user.token}` } }
            );
            promise.then(response => {
                console.log(response);
                setHabitsHistoric(response.data);
                let dateArray = [];
                let dates = [];

                response.data.forEach(data => {
                    data.habits.forEach(habit => {
                        convertDate(habit.date).dateFormat3 !== dayjs().format('DD/MM/YYYY') && dates.push(convertDate(habit.date).dateFormat3);
                        let className = verificationHabits(habit);
                        if (convertDate(habit.date).dateFormat3 !== dayjs().format('DD/MM/YYYY')) {
                            dateArray.push({
                                date: habit.date,
                                style: className
                            });
                        }
                    })
                })
                setAllDates(dates);
                setDateHabits(dateArray);
            });
        }
    }, [user]);

    function verificationHabits(habit) {
        let name;
        let fails = [];

        if (habit.done && !fails.includes(habit.date)) {
            name = 'styleDay-green';
        } else {
            fails.push(habit.date);
            name = 'styleDay-red';
        }
        return name;
    }

    const onChange = date => {
        setDate(date);
    };

    function setClass(date) {
        if (dateHabits) {
            const dateobj = dateHabits.find((x) => {
                return (
                    date.getDay() === new Date(x.date).getDay() &&
                    date.getMonth() === new Date(x.date).getMonth() &&
                    date.getDate() === new Date(x.date).getDate()
                );
            });
            return dateobj ? dateobj.style : "";
        }
    }

    function convertDate(date) {
        var date = date.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})/);
        if (date == null) {
            return false;
        } else {
            var dateObj = {
                dateFormat1: date[3] + '.' + date[2] + '.' + date[1],
                dateFormat2: date[1] + '-' + date[2] + '-' + date[3],
                dateFormat3: date[3] + '/' + date[2] + '/' + date[1],
                time: date[4] + ':' + date[5] + ':' + date[6],
            };
            return dateObj;
        }
    };

    return (
        <Container>
            <Header />
            <Title text={'Histórico'} />

            <ContainerCalendar>
                <Calendar
                    className={styleCalendar}
                    value={date}
                    locale="pt-Br"
                    onChange={onChange}
                    formatDay={(locale, date) => dayjs(date).format("DD")}
                    tileClassName={({ activeStartDate, date, view }) => setClass(date)}
                />
            </ContainerCalendar>

            {allDates.includes(formatDay) && (
                <ContainerDays>
                    <DateSelected>{formatDay}</DateSelected>
                    {habitsHistoric.map(data => {
                        if (data.day === formatDay) {
                            // return day.habits.forEach(() => <Day />)
                            let habits = [];
                            data.habits.forEach((habit, index) => {
                                habits.push(<Day key={index} habit={habit} />);
                            });
                            return habits;
                        }
                    })}
                </ContainerDays>
            )}
            <Menu />
        </Container>
    )
}

const Container = styled.div`
min-height: 100vh;
padding: 70px 0;
background: #E5E5E5;
display: flex;
flex-direction: column;
align-items: center;
.styleDay-green {
    padding: 2px;
    color: black;
    background-color: #8CC654;
    border-radius: 50%;
}
.styleDay-red {
    padding: 2px;
    color: black;
    background-color: #EA5766;
    border-radius: 50%;
}
`

const ContainerCalendar = styled.div`
width: 100vw;
max-width: 500px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-sizing: border-box;
`

const ContainerDays = styled.div`
width: 100%;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
`

const DateSelected = styled.div`
 padding-left: 20px;
`

const styleCalendar = styled.div`
.react-calendar {
  max-width: 90vw;
  background: #fff;
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
}
.react-calendar--doubleView {
  width: 700px;
}
.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}
.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}
.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
.react-calendar button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  display: flex;
  height: 44px;
  margin-bottom: 1em;
}
.react-calendar__navigation button {
  min-width: 44px;
  background: none;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background-color: #e6e6e6;
}
.react-calendar__navigation button[disabled] {
  background-color: #f0f0f0;
}
.react-calendar__month-view__weekdays {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.75em;
}
.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}
.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
  padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
}
.react-calendar__month-view__days__day--weekend {
  height: 50px;
  color: #d10000;
}
.react-calendar__month-view__days__day--neighboringMonth {
  height: 50px;
  color: #757575;
}
.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}
.react-calendar__tile {
  max-width: 100%;
  text-align: center;
  padding: 0.75em 0.5em;
  background: none;
}
.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
  border-radius: 50%;
}
.react-calendar__tile--now {
  background: #ffff76;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: #ffffa9;
}
.react-calendar__tile--hasActive {
  background: #76baff;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}
`