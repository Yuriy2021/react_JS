import { initialState, chatsReducer } from "../chats/reducer";
import { createChat } from "../../../entities/";
import { createAddChat } from "../actions";



describe('chatsReducer', () => {

    it('вызов редьюсера без экшена вернет initialState', () => {
        const result = playersReducer();

        expect(result).toEqual(initialState);
    });

    it('чат добавляется в конец списка', () => {
        const chat = createChat('chat-1');
        const result = chatsReducer(undefined, createAddChat(chat));

        expect(result).toEqual({
            chats: [
                chat
            ]
        });
    });

})