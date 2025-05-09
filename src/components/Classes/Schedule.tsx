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

// Sample events
const events: GymEvent[] = [
  {
    title: 'Yoga Class',
    start: new Date(2025, 2, 19, 8, 0),
    end: new Date(2025, 2, 19, 9, 0),
    available: true,
  },
  {
    title: 'Karate Class',
    start: new Date(2025, 4, 15, 7, 0),
    end: new Date(2025, 4, 15, 10, 0),
    available: false,
  },
  {
    title: 'Karate Class',
    start: new Date(2025, 4, 15, 6, 0),
    end: new Date(2025, 4, 15, 7, 0),
    available: true,
  },
  {
    title: 'Box Class',
    start: new Date(2025, 2, 22, 7, 0),
    end: new Date(2025, 2, 22, 10, 0),
    available: false,
  },
  {
    title: 'JiuJitsu Class',
    start: new Date(2025, 2, 23, 13, 0),
    end: new Date(2025, 2, 23, 15, 0),
    available: true,
  },
];

// Calendar styles for dark theme only
const calendarStyles = `
  .rbc-calendar {
    background-color: transparent;
    font-family: 'Arial', sans-serif;
    color: #e5e7eb;
  }
  .rbc-header {
    background-color: transparent;
    border-bottom: 1px solid #374151;
    padding: 12px;
    font-size: 14px;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffffff;
  }
  .rbc-day-bg,
  .rbc-time-view,
  .rbc-time-header {
    background-color: transparent;
  }
  .rbc-today {
    background-color: #1f2937;
  }
  .rbc-event {
    background-color: #60a5fa;
    color: #ffffff;
    border-radius: 6px;
    padding: 6px 8px;
    font-size: 12px;
    border: none !important;
    margin: 0;
    transition: background-color 0.3s ease;
  }
  .rbc-event:hover {
    background-color: #3b82f6;
  }
  .rbc-event.rbc-unavailable {
    background-color: #10b981;
  }
  .rbc-event.rbc-past {
    background-color: #6b7280;
    opacity: 0.7;
  }
  .rbc-time-header {
    border-bottom: 1px solid #374151;
    color: #ffffff;
  }
  .rbc-time-content {
    border-top: 1px solid #374151;
  }
  .rbc-timeslot-group {
    border-bottom: 1px solid #374151;
    position: relative;
  }
  .rbc-time-slot {
    font-size: 12px;
    color: #9ca3af;
  }
  .rbc-timeslot-group:has(.rbc-event) {
    border-bottom: none !important;
  }
  .rbc-btn-group button {
    background-color: #374151;
    color: #ffffff;
    border: 1px solid #4b5563;
    border-radius: 6px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 300;
    transition: background-color 0.3s ease;
  }
  .rbc-btn-group button:hover {
    background-color: #4b5563;
  }
`;

const Schedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<GymEvent | null>(null);
  const [eventList, setEventList] = useState<GymEvent[]>(events);
  const currentDate = new Date();

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

  return (
    <div className='max-w-[1280px] mx-auto px-6 py-16 bg-black min-h-screen'>
      <style>{calendarStyles}</style>

      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-3xl font-light tracking-wide text-white'>
          Class Schedule
        </h2>
      </div>

      <div className='mb-12 rounded-lg shadow-sm bg-gray-800'>
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
        <div className='p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md bg-gray-800'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='text-xl font-light tracking-wide text-white'>
              {selectedEvent.title}
            </h3>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                isEventInPast(selectedEvent)
                  ? 'bg-gray-700 text-gray-300'
                  : selectedEvent.available
                  ? 'bg-blue-900 text-blue-200'
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
          <p className='text-sm mb-4 text-gray-400'>
            {moment(selectedEvent.start).format('hh:mm A')} -{' '}
            {moment(selectedEvent.end).format('hh:mm A')} |{' '}
            {moment(selectedEvent.start).format('MMMM Do YYYY')}
          </p>
          {selectedEvent.available && !isEventInPast(selectedEvent) && (
            <button
              onClick={handleBookClass}
              className='px-4 py-2 rounded-lg border border-gray-600 text-white hover:bg-gray-700 transition-colors duration-300'
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
