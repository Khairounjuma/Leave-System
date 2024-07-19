package com.leave.manage.service;


import com.leave.manage.model.Admin;
import com.leave.manage.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService implements AdminServices {
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    @Override
    public boolean validateAdmin(String email, String password) {
        return false;
    }

}