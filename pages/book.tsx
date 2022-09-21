import React, { useContext } from "react";
import { ShowBookContext } from "../contexts/ShowBookContext";
import { MdAddCircle } from "react-icons/md";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { ShowBookPageContext } from "../contexts/ShowBookPageContext";
import { Notes } from "../components/Notes";
import { IBook } from "../api/types";
import { addToReadingList } from "../api/addToReadingList";
import { useRouter } from "next/router";
import { UserContext } from "../contexts/UserContext";
import { removeFromReadingList } from "../api/removeFromReadingList";
import { markAsFinished } from "../api/markAsFinished";
import { markAsInProgress } from "../api/markAsInProgress";

const book = () => {
  const { user } = useContext(UserContext);
  const { book, list } = useContext(ShowBookContext);
  const { previousPage } = useContext(ShowBookPageContext);
  const currentBook: IBook = previousPage != "/discover" ? list.book : book;
  const router = useRouter();

  const startDate = new Date(list?.start_date);
  const startMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][startDate.getMonth()];
  const startDay = startDate.getDay();
  const start_date_formatted = startMonth + " " + startDay;

  const finishDate = new Date(list?.finish_date);
  const finishMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][finishDate.getMonth()];
  const finishDay = finishDate.getDay();
  const finish_date_formatted = finishMonth + " " + finishDay;

  const handleAddToReadingList = async (
    e: React.SyntheticEvent<EventTarget>,
    bookID: number
  ) => {
    e.stopPropagation();
    const onComplete = () => router.push(previousPage);
    await addToReadingList(bookID, user.id, onComplete);
  };

  const handleClickRemove = async (
    e: React.SyntheticEvent<EventTarget>,
    listID: number
  ) => {
    e.stopPropagation();
    const onComplete = () => router.push(previousPage);

    await removeFromReadingList(listID, onComplete);
  };

  const handleAddToFinishedList = async (
    e: React.SyntheticEvent<EventTarget>,
    list: ListItem
  ) => {
    e.stopPropagation();
    const onComplete = () => router.push(previousPage);
    await markAsFinished(list, onComplete);
  };

  const handleReturnToReadingList = async (
    e: React.SyntheticEvent<EventTarget>,
    list: ListItem
  ) => {
    e.stopPropagation();
    const onComplete = () => router.push(previousPage);
    await markAsInProgress(list, onComplete);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-5">
        <div className="grow">
          <img
            src={currentBook.cover_image_url}
            width={180}
            height={270}
            className="min-w-[180px]"
          />
        </div>
        <div className="grow-3">
          <div className="flex flex-row mb-14">
            <div className="grow-[3] leading-5">
              <div className="text-4xl font-medium p-2 pt-0">
                {currentBook.title}
              </div>
              <div className="flex flex-row">
                <div className="px-3 italic h-[21px]">
                  {currentBook.author} | {currentBook.publisher}
                </div>
              </div>
              <div className="p-2 pt-0 mt-4">
                {previousPage != "/discover" && (
                  <>
                    <FaRegCalendarAlt className="inline mb-1" />{" "}
                    <span className="inline text-center">
                      {start_date_formatted}
                    </span>
                  </>
                )}{" "}
                {previousPage == "/finished" ? (
                  <span>— {finish_date_formatted}</span>
                ) : (
                  ""
                )}
              </div>
            </div>
            {previousPage == "/discover" && (
              <div className="grow-[1] max-w-[24px] flex flex-col justify-center min-w-fit">
                <div className="p-2 rounded-30 border-solid border-2 border-slate-200 bg-white text-custom_gray">
                  <MdAddCircle
                    className="hover:text-indigo-600"
                    onClick={(e) => {
                      handleAddToReadingList(e, currentBook.id);
                    }}
                  />
                </div>
              </div>
            )}
            {previousPage != "/discover" && (
              <div className="flex flex-col justify-around">
                <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white text-custom_gray">
                  {previousPage == "/list" ? (
                    <BsCheckCircleFill
                      className="hover:text-green-600"
                      onClick={(e) => {
                        handleAddToFinishedList(e, list);
                      }}
                    />
                  ) : (
                    <FaBook
                      className="hover:text-yellow-400"
                      onClick={(e) => {
                        handleReturnToReadingList(e, list);
                      }}
                    />
                  )}
                </div>
                <div className=" p-2 rounded-30 border-solid border-2 border-slate-200 ml-1 bg-white text-custom_gray">
                  <FaMinusCircle
                    className="hover:text-rose-600"
                    onClick={(e) => {
                      handleClickRemove(e, list.id);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="mt-6">{currentBook.synopsis}</div>
        </div>
      </div>
      {previousPage != "/discover" && <Notes list={list} />}
    </div>
  );
};

export default book;
