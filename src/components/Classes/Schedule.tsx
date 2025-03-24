'use client';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

// Create a localizer for the calendar
const localizer = momentLocalizer(moment);

// Define the type for our custom event
interface GymEvent extends Event {
  title: string;
  start: Date;
  end: Date;
  available: boolean;
}

// Sample events with an "available" status
const events: GymEvent[] = [
  {
    title: 'Yoga Class',
    start: new Date(2025, 2, 19, 8, 0), // Future date
    end: new Date(2025, 2, 19, 9, 0),
    available: true,
  },
  {
    title: 'Karate Class',
    start: new Date(2025, 2, 18, 7, 0), // Yesterday relative to March 22, 2025
    end: new Date(2025, 2, 18, 10, 0),
    available: false,
  },
  {
    title: 'Box Class',
    start: new Date(2025, 2, 22, 7, 0), // Today
    end: new Date(2025, 2, 22, 10, 0),
    available: false,
  },
  {
    title: 'JiuJitsu Class',
    start: new Date(2025, 2, 23, 13, 0), // Tomorrow
    end: new Date(2025, 2, 23, 15, 0),
    available: true,
  },
];

// Custom styles for the calendar with theme support
const calendarStyles = `
  .rbc-calendar {
    background-color: transparent;
    font-family: 'Arial', sans-serif;
  }
  .rbc-header {
    background-color: transparent;
    border-bottom-width: 1px;
    padding: 12px;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .rbc-day-bg {
    background-color: transparent;
  }
  .rbc-today {
    background-color: var(--today-bg);
  }
  .rbc-event {
    background-color: var(--event-bg);
    color: #ffffff;
    border-radius: 6px;
    padding: 6px 8px;
    font-size: 12px;
    transition: background-color 0.3s ease;
    border: none !important;
    margin: 0;
  }
  .rbc-event:hover {
    background-color: var(--event-hover-bg);
  }
  .rbc-event.rbc-unavailable {
    background-color: #10b981; /* Green for booked, same in both themes */
  }
  .rbc-event.rbc-past {
    background-color: var(--past-event-bg);
    opacity: 0.7;
  }
  .rbc-time-view {
    background-color: transparent;
  }
  .rbc-time-header {
    background-color: transparent;
    border-bottom-width: 1px;
  }
  .rbc-time-content {
    border-top-width: 1px;
  }
  .rbc-timeslot-group {
    border-bottom-width: 1px;
    position: relative;
  }
  .rbc-time-slot {
    font-size: 12px;
  }
  .rbc-timeslot-group:has(.rbc-event) {
    border-bottom: none !important;
  }
  .rbc-btn-group button {
    border-width: 1px;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 300;
    transition: background-color 0.3s ease;
  }
  .rbc-btn-group button:hover {
    background-color: var(--button-hover-bg);
  }

  /* Light Theme */
  .light .rbc-calendar {
    color: #6b7280;
  }
  .light .rbc-header {
    color: #1f2937;
    border-bottom-color: #e5e7eb;
  }
  .light .rbc-today {
    --today-bg: #f3f4f6;
  }
  .light .rbc-event {
    --event-bg: #3b82f6;
    --event-hover-bg: #2563eb;
    --past-event-bg: #6b7280;
  }
  .light .rbc-time-header {
    color: #1f2937;
    border-bottom-color: #e5e7eb;
  }
  .light .rbc-time-content {
    border-top-color: #e5e7eb;
  }
  .light .rbc-timeslot-group {
    border-bottom-color: #e5e7eb;
  }
  .light .rbc-time-slot {
    color: #9ca3af;
  }
  .light .rbc-btn-group button {
    background-color: #ffffff;
    color: #1f2937;
    border-color: #e5e7eb;
    --button-hover-bg: #f3f4f6;
  }

  /* Dark Theme */
  .dark .rbc-calendar {
    color: #e5e7eb;
  }
  .dark .rbc-header {
    color: #ffffff;
    border-bottom-color: #374151;
  }
  .dark .rbc-today {
    --today-bg: #1f2937;
  }
  .dark .rbc-event {
    --event-bg: #60a5fa;
    --event-hover-bg: #3b82f6;
    --past-event-bg: #6b7280;
  }
  .dark .rbc-time-header {
    color: #ffffff;
    border-bottom-color: #374151;
  }
  .dark .rbc-time-content {
    border-top-color: #374151;
  }
  .dark .rbc-timeslot-group {
    border-bottom-color: #374151;
  }
  .dark .rbc-time-slot {
    color: #9ca3af;
  }
  .dark .rbc-btn-group button {
    background-color: #374151;
    color: #ffffff;
    border-color: #4b5563;
    --button-hover-bg: #4b5563;
  }
`;

const Schedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<GymEvent | null>(null);
  const [eventList, setEventList] = useState<GymEvent[]>(events);
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Theme state
  const currentDate = new Date(); // Current date: March 22, 2025

  const handleEventSelect = (event: GymEvent) => {
    setSelectedEvent(event);
  };

  const isEventInPast = (event: GymEvent): boolean => {
    return event.end < currentDate;
  };

  const handleBookClass = () => {
    if (
      selectedEvent &&
      selectedEvent.available &&
      !isEventInPast(selectedEvent)
    ) {
      const updatedEvents = eventList.map((ev) =>
        ev.title === selectedEvent.title &&
        ev.start.getTime() === selectedEvent.start.getTime()
          ? { ...ev, available: false }
          : ev
      );
      setEventList(updatedEvents);
      setSelectedEvent({ ...selectedEvent, available: false });
    }
  };

  const eventStyleGetter = (event: GymEvent) => {
    const isPast = isEventInPast(event);
    const style = {
      className: isPast ? 'rbc-past' : event.available ? '' : 'rbc-unavailable',
    };
    return style;
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className={`max-w-[1280px] mx-auto px-6 py-16 ${
        theme === 'light'
          ? 'bg-gray-50 text-gray-900'
          : 'bg-gray-900 text-white'
      } ${theme}`}
    >
      <style>{calendarStyles}</style>

      <div className='flex justify-between items-center mb-8'>
        <h2
          className={`text-3xl font-light tracking-wide ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}
        >
          Class Schedule
        </h2>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
            theme === 'light'
              ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}
        >
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>
      </div>

      <div
        className={`mb-12 rounded-lg shadow-sm ${
          theme === 'light' ? 'bg-white' : 'bg-gray-800'
        }`}
      >
        <Calendar<GymEvent>
          localizer={localizer}
          events={eventList}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 600 }}
          onSelectEvent={handleEventSelect}
          views={['day']}
          defaultView='day'
          eventPropGetter={eventStyleGetter}
        />
      </div>

      {selectedEvent && (
        <div
          className={`p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${
            theme === 'light' ? 'bg-white' : 'bg-gray-800'
          }`}
        >
          <div className='flex items-center justify-between mb-4'>
            <h3
              className={`text-xl font-light tracking-wide ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}
            >
              {selectedEvent.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isEventInPast(selectedEvent)
                  ? theme === 'light'
                    ? 'bg-gray-200 text-gray-600'
                    : 'bg-gray-700 text-gray-300'
                  : selectedEvent.available
                  ? theme === 'light'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-blue-900 text-blue-200'
                  : theme === 'light'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-green-900 text-green-200'
              }`}
            >
              {isEventInPast(selectedEvent)
                ? 'Past'
                : selectedEvent.available
                ? 'Open'
                : 'Booked'}
            </span>
          </div>
          <p
            className={`text-sm mb-4 ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}
          >
            {moment(selectedEvent.start).format('hh:mm A')} -{' '}
            {moment(selectedEvent.end).format('hh:mm A')} |{' '}
            {moment(selectedEvent.start).format('MMMM Do YYYY')}
          </p>
          {selectedEvent.available && !isEventInPast(selectedEvent) && (
            <button
              onClick={handleBookClass}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                theme === 'light'
                  ? 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100'
                  : 'bg-transparent border border-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Book Now
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Schedule;
