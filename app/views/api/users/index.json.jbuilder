json.users do 
    @users.each do |user| 
        json.set! user.id do 
            json.extract! user, :username
            # json.partial! "api/users/user", user: user    
            # ^-- this seems excessive 
        end 
    end 
end 