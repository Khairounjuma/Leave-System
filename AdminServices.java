package com.leave.manage.service;

import com.leave.manage.model.Admin;



public interface AdminServices {
    public Admin saveAdmin(Admin admin);
    public boolean validateAdmin(String email, String password);
}
